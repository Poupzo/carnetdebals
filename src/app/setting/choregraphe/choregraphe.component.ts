import { Component, OnInit } from '@angular/core';
import { MatDialog, throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { PopupChoregrapheComponent } from './popup-choregraphe/popup-choregraphe.component';
import { ChoregrapheService } from './services/choregraphe.service';
import { Choregraphe } from './models/choregraphe';

@Component({
  selector: 'app-choregraphe',
  templateUrl: './choregraphe.component.html',
  styleUrls: ['./choregraphe.component.css']
})
export class ChoregrapheComponent implements OnInit {
  choregraphes: Choregraphe[];

  constructor(public dialog: MatDialog, private ChoregrapheService: ChoregrapheService) {}

    ngOnInit() {
    this.getChoregraphes();
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(PopupChoregrapheComponent, {
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
    
      save (result : Choregraphe): void {
        this.ChoregrapheService.addChoregraphe(result)
          .subscribe(choregraphe => {this.choregraphes.push(choregraphe)});
          this.getChoregraphes();
        }
    
      getChoregraphes(): void {
        this.ChoregrapheService.getChoregraphes()
          .subscribe(choregraphes => this.choregraphes = choregraphes);
      }
    
      delete(choregraphe: Choregraphe): void {
        this.choregraphes = this.choregraphes.filter(h => h !== choregraphe);
        this.ChoregrapheService.deleteChoregraphe(choregraphe).subscribe();
      }

}
