import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpoqueComponent } from './epoque.component';

describe('EpoqueComponent', () => {
  let component: EpoqueComponent;
  let fixture: ComponentFixture<EpoqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpoqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
