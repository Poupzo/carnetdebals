import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Choregraphe } from '../models/choregraphe';

@Component({
  selector: 'app-popup-choregraphe',
  templateUrl: './popup-choregraphe.component.html',
  styleUrls: ['./popup-choregraphe.component.css']
})
export class PopupChoregrapheComponent {

  constructor(
    public dialogRef: MatDialogRef<PopupChoregrapheComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Choregraphe) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
