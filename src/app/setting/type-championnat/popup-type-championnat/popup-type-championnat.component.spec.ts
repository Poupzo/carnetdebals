import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupTypeChampionnatComponent } from './popup-type-championnat.component';

describe('PopupTypeChampionnatComponent', () => {
  let component: PopupTypeChampionnatComponent;
  let fixture: ComponentFixture<PopupTypeChampionnatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupTypeChampionnatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupTypeChampionnatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
