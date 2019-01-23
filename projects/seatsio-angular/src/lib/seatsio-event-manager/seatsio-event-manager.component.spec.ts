import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsioEventManagerComponent } from './seatsio-event-manager.component';

describe('SeatsioEventManagerComponent', () => {
  let component: SeatsioEventManagerComponent;
  let fixture: ComponentFixture<SeatsioEventManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatsioEventManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsioEventManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
