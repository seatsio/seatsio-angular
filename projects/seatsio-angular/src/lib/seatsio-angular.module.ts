import { NgModule } from '@angular/core';
import { SeatsioDesignerComponent } from './seatsio-designer/seatsio-designer.component';
import { SeatsioSeatingChartComponent } from './seatsio-seating-chart/seatsio-seating-chart.component';

@NgModule({
  declarations: [SeatsioDesignerComponent, SeatsioSeatingChartComponent],
  imports: [],
  exports: [SeatsioDesignerComponent, SeatsioSeatingChartComponent]
})
export class SeatsioAngularModule { }
