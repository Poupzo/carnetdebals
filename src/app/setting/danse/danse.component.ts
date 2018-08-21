import { Component, OnInit } from '@angular/core';
import { MatDialog, throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { PopupDanseComponent } from './popup-danse/popup-danse.component';
import { DanseService } from './services/danse.service';
import { Danse } from './models/danse';

@Component({
  selector: 'app-danse',
  templateUrl: './danse.component.html',
  styleUrls: ['./danse.component.css']
})
export class DanseComponent implements OnInit {
  danses: Danse[];

  constructor(public dialog: MatDialog, private DanseService: DanseService) {}

    ngOnInit() {
    this.getDanses();
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(PopupDanseComponent, {
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
    
      save (result : Danse): void {
        this.DanseService.addDanse(result)
          .subscribe(danse => {this.danses.push(danse)});
          this.getDanses();
        }
    
      getDanses(): void {
        this.DanseService.getDanses()
          .subscribe(danses => this.danses = danses);
      }
    
      delete(danse: Danse): void {
        this.danses = this.danses.filter(h => h !== danse);
        this.DanseService.deleteDanse(danse).subscribe();
      }
}
