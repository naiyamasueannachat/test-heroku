import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HreoesComponent } from './hreoes.component';

describe('HreoesComponent', () => {
  let component: HreoesComponent;
  let fixture: ComponentFixture<HreoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HreoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HreoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
