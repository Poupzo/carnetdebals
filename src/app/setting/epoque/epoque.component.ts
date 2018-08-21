import { Component, OnInit } from '@angular/core';
import { MatDialog, throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { PopupEpoqueComponent } from './popup-epoque/popup-epoque.component';
import { EpoqueService } from './services/epoque.service';
import { Epoque } from './models/epoque';

@Component({
  selector: 'app-epoque',
  templateUrl: './epoque.component.html',
  styleUrls: ['./epoque.component.css']
})
export class EpoqueComponent implements OnInit {
  epoques: Epoque[];

  constructor(public dialog: MatDialog, private EpoqueService: EpoqueService) {}

    ngOnInit() {
    this.getEpoques();
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(PopupEpoqueComponent, {
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
    
      save (result : Epoque): void {
        this.EpoqueService.addEpoque(result)
          .subscribe(epoque => {this.epoques.push(epoque)});
          this.getEpoques();
        }
    
      getEpoques(): void {
        this.EpoqueService.getEpoques()
          .subscribe(epoques => this.epoques = epoques);
      }
    
      delete(epoque: Epoque): void {
        this.epoques = this.epoques.filter(h => h !== epoque);
        this.EpoqueService.deleteEpoque(epoque).subscribe();
      }

}
