import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsChampionnatComponent } from './details-championnat.component';

describe('DetailsChampionnatComponent', () => {
  let component: DetailsChampionnatComponent;
  let fixture: ComponentFixture<DetailsChampionnatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsChampionnatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsChampionnatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
