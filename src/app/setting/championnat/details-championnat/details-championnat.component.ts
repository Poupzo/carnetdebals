import { Component, OnInit, Input } from '@angular/core';
import { ChampionnatService } from '../services/championnat.service';
import { ActivatedRoute } from '@angular/router';
import { championnat } from '../models/championnat';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-championnat',
  templateUrl: './details-championnat.component.html',
  styleUrls: ['./details-championnat.component.css']
})
export class DetailsChampionnatComponent implements OnInit {
  @Input() championnat: championnat;
  disabled = true;

  constructor(
    private route: ActivatedRoute,
    private championnatService: ChampionnatService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getChampionnat();
  }

  getChampionnat(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.debug(id);
    this.championnatService.getChampionnatNo404(id)
      .subscribe(championnat => this.championnat = championnat);
  }

  goBack(): void {
    this.location.back();
  }

  disable(): void {
    this.disabled = !this.disabled;
  }
}
