import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InPersonClassesComponent } from './in-person-classes.component';

describe('InPersonClassesComponent', () => {
  let component: InPersonClassesComponent;
  let fixture: ComponentFixture<InPersonClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InPersonClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InPersonClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
