import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { championnat } from '../models/championnat';
import { TypeChampionnatService } from '../../type-championnat/services/type-championnat.service';
import { typeChampionnat } from '../../type-championnat/models/type-championnat';

@Component({
  selector: 'app-popup-championnat',
  templateUrl: './popup-championnat.component.html',
  styleUrls: ['./popup-championnat.component.css']
})

export class PopupChampionnatComponent {
  championnat: championnat;
  types: typeChampionnat[];

  ngOnInit() {
    this.getTypeChampionnats();
  }

  constructor(
    public dialogRef: MatDialogRef<PopupChampionnatComponent>, private TypeChampionnatService: TypeChampionnatService,
    @Inject(MAT_DIALOG_DATA) public data: championnat) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  getTypeChampionnats(): void {
    this.TypeChampionnatService.getTypeChampionnats()
      .subscribe(types => this.types = types);
  }
}
