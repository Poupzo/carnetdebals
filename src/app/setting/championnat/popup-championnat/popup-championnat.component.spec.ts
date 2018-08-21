import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupChampionnatComponent } from './popup-championnat.component';

describe('PopupChampionnatComponent', () => {
  let component: PopupChampionnatComponent;
  let fixture: ComponentFixture<PopupChampionnatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupChampionnatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupChampionnatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
