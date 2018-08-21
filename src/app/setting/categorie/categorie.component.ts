import { Component, OnInit } from '@angular/core';
import { MatDialog, throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { PopupCategorieComponent } from './popup-categorie/popup-categorie.component';
import { CategorieService } from './services/categorie.service';
import { Categorie } from './models/categorie';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categories: Categorie[];

  constructor(public dialog: MatDialog, private CategorieService: CategorieService) {}

    ngOnInit() {
    this.getCategories();
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(PopupCategorieComponent, {
          width: '500px',
          height: '250px',
          data: { }
        });
    
        dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.save(result);
        }
    
        console.log('The dialog was closed');
        });
      }
    
      save (result : Categorie): void {
        this.CategorieService.addCategorie(result)
          .subscribe(categorie => {this.categories.push(categorie)});
          this.getCategories();
        }
    
      getCategories(): void {
        this.CategorieService.getCategories()
          .subscribe(categories => this.categories = categories);
      }
    
      delete(categorie: Categorie): void {
        this.categories = this.categories.filter(h => h !== categorie);
        this.CategorieService.deleteCategorie(categorie).subscribe();
      }
}
