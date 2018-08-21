import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-popup-categorie',
  templateUrl: './popup-categorie.component.html',
  styleUrls: ['./popup-categorie.component.css']
})
export class PopupCategorieComponent {

  constructor(
    public dialogRef: MatDialogRef<PopupCategorieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Categorie) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
