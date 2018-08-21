import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupLevelComponent } from './popup-level.component';

describe('PopupLevelComponent', () => {
  let component: PopupLevelComponent;
  let fixture: ComponentFixture<PopupLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
