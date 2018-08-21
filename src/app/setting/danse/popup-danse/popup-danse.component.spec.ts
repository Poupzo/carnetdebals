import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDanseComponent } from './popup-danse.component';

describe('PopupDanseComponent', () => {
  let component: PopupDanseComponent;
  let fixture: ComponentFixture<PopupDanseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupDanseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDanseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
