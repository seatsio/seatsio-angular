import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsioSeatingChartComponent } from './seatsio-seating-chart.component';

describe('SeatsioSeatingChartComponent', () => {
  let component: SeatsioSeatingChartComponent;
  let fixture: ComponentFixture<SeatsioSeatingChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatsioSeatingChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsioSeatingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
