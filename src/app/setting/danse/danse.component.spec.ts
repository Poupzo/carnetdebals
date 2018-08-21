import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanseComponent } from './danse.component';

describe('DanseComponent', () => {
  let component: DanseComponent;
  let fixture: ComponentFixture<DanseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
