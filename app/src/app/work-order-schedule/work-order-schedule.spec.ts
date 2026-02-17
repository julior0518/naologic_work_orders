import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderSchedule } from './work-order-schedule';

describe('WorkOrderSchedule', () => {
  let component: WorkOrderSchedule;
  let fixture: ComponentFixture<WorkOrderSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkOrderSchedule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkOrderSchedule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
