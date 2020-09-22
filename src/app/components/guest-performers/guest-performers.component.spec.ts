import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestPerformersComponent } from './guest-performers.component';

describe('GuestPerformersComponent', () => {
  let component: GuestPerformersComponent;
  let fixture: ComponentFixture<GuestPerformersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestPerformersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestPerformersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
