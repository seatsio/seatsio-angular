import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsioDesignerComponent } from './seatsio-designer.component';

describe('SeatsioDesignerComponent', () => {
  let component: SeatsioDesignerComponent;
  let fixture: ComponentFixture<SeatsioDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatsioDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsioDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
