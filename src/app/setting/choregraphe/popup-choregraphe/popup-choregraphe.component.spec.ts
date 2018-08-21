import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupChoregrapheComponent } from './popup-choregraphe.component';

describe('PopupChoregrapheComponent', () => {
  let component: PopupChoregrapheComponent;
  let fixture: ComponentFixture<PopupChoregrapheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupChoregrapheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupChoregrapheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
