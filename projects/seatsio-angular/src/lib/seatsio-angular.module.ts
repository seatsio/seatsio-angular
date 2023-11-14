import {NgModule} from '@angular/core';
import {SeatsioDesignerComponent} from './seatsio-designer/seatsio-designer.component';
import {SeatsioSeatingChartComponent} from './seatsio-seating-chart/seatsio-seating-chart.component';
import {SeatsioEventManagerComponent} from './seatsio-event-manager/seatsio-event-manager.component';
import {SeatsioComponent} from './seatsio.component';

@NgModule({
  declarations: [
    SeatsioComponent,
    SeatsioDesignerComponent,
    SeatsioSeatingChartComponent,
    SeatsioEventManagerComponent
  ],
  imports: [],
  exports: [
    SeatsioDesignerComponent,
    SeatsioSeatingChartComponent,
    SeatsioEventManagerComponent
  ]
})
export class SeatsioAngularModule {
}
