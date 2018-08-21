import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Level } from '../models/level';

@Component({
  selector: 'app-popup-level',
  templateUrl: './popup-level.component.html',
  styleUrls: ['./popup-level.component.css']
})
export class PopupLevelComponent {

  constructor(
    public dialogRef: MatDialogRef<PopupLevelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Level) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
