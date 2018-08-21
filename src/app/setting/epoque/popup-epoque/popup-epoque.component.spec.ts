import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEpoqueComponent } from './popup-epoque.component';

describe('PopupEpoqueComponent', () => {
  let component: PopupEpoqueComponent;
  let fixture: ComponentFixture<PopupEpoqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupEpoqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupEpoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
