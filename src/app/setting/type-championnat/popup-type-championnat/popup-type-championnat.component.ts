import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { typeChampionnat } from '../models/type-championnat';

@Component({
  selector: 'app-popup-type-championnat',
  templateUrl: './popup-type-championnat.component.html',
  styleUrls: ['./popup-type-championnat.component.css']
})
export class PopupTypeChampionnatComponent {

  constructor(
    public dialogRef: MatDialogRef<PopupTypeChampionnatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: typeChampionnat) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
