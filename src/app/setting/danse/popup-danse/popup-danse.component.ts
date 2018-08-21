import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Danse } from '../models/danse';

@Component({
  selector: 'app-popup-danse',
  templateUrl: './popup-danse.component.html',
  styleUrls: ['./popup-danse.component.css']
})
export class PopupDanseComponent {

  constructor(
    public dialogRef: MatDialogRef<PopupDanseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Danse) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
