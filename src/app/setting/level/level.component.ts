import { Component, OnInit } from '@angular/core';
import { MatDialog, throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { PopupLevelComponent } from './popup-level/popup-level.component';
import { LevelService } from './services/level.service';
import { Level } from './models/level';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {
  levels: Level[];

  constructor(public dialog: MatDialog, private LevelService: LevelService) {}

    ngOnInit() {
    this.getLevels();
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(PopupLevelComponent, {
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
    
      save (result : Level): void {
        this.LevelService.addLevel(result)
          .subscribe(level => {this.levels.push(level)});
          this.getLevels();
        }
    
      getLevels(): void {
        this.LevelService.getLevels()
          .subscribe(levels => this.levels = levels);
      }
    
      delete(level: Level): void {
        this.levels = this.levels.filter(h => h !== level);
        this.LevelService.deleteLevel(level).subscribe();
      }
}
