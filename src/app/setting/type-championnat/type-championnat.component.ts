import { Component, OnInit } from '@angular/core';
import { MatDialog, throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { PopupTypeChampionnatComponent } from './popup-type-championnat/popup-type-championnat.component';
import { TypeChampionnatService } from './services/type-championnat.service';
import { typeChampionnat } from './models/type-championnat';

@Component({
  selector: 'app-type-championnat',
  templateUrl: './type-championnat.component.html',
  styleUrls: ['./type-championnat.component.css']
})

export class TypeChampionnatComponent implements OnInit {
    types: typeChampionnat[];

  constructor(public dialog: MatDialog, private TypeChampionnatService: TypeChampionnatService) {}

    ngOnInit() {
    this.getTypeChampionnats();
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(PopupTypeChampionnatComponent, {
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
    
      save (result : typeChampionnat): void {
        this.TypeChampionnatService.addTypeChampionnat(result)
          .subscribe(type => {this.types.push(type)});
          this.getTypeChampionnats();
        }
    
      getTypeChampionnats(): void {
        this.TypeChampionnatService.getTypeChampionnats()
          .subscribe(types => this.types = types);
      }
    
      delete(type: typeChampionnat): void {
        this.types = this.types.filter(h => h !== type);
        this.TypeChampionnatService.deleteTypeChampionnat(type).subscribe();
      }
}