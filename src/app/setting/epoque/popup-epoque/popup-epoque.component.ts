import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Epoque } from '../models/epoque';

@Component({
  selector: 'app-popup-epoque',
  templateUrl: './popup-epoque.component.html',
  styleUrls: ['./popup-epoque.component.css']
})
export class PopupEpoqueComponent {

  constructor(
    public dialogRef: MatDialogRef<PopupEpoqueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Epoque) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
