import { Component, OnInit } from '@angular/core';
import { MatDialog, throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { PopupChampionnatComponent } from './popup-championnat/popup-championnat.component';
import { ChampionnatService } from './services/championnat.service';
import { championnat } from './models/championnat';

@Component({
  selector: 'app-championnat',
  templateUrl: './championnat.component.html',
  styleUrls: ['./championnat.component.css']
})

export class ChampionnatComponent implements OnInit {
  championnats: championnat[];

  //name: string;
  //type: string;

  constructor(public dialog: MatDialog, private championnatService: ChampionnatService) {}

  ngOnInit() {
    this.getChampionnats();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupChampionnatComponent, {
      width: '500px',
      height: '250px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
    if(result){
      console.log(result.date);
      this.save(result);
    }

    console.log('The dialog was closed');
    });
  }

  save (result : championnat): void {
    this.championnatService.addChampionnat(result)
      .subscribe(championnat => {this.championnats.push(championnat)});
      this.getChampionnats();
    }

  getChampionnats(): void {
    this.championnatService.getChampionnats()
      .subscribe(championnats => this.championnats = championnats);
  }

  delete(championnat: championnat): void {
    this.championnats = this.championnats.filter(h => h !== championnat);
    this.championnatService.deleteChampionnat(championnat).subscribe();
  }
}
