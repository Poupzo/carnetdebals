import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCategorieComponent } from './popup-categorie.component';

describe('PopupCategorieComponent', () => {
  let component: PopupCategorieComponent;
  let fixture: ComponentFixture<PopupCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
