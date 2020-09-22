import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPerformancesComponent } from './past-performances.component';

describe('PastPerformancesComponent', () => {
  let component: PastPerformancesComponent;
  let fixture: ComponentFixture<PastPerformancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastPerformancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastPerformancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
