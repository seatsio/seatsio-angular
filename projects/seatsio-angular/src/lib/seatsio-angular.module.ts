import {NgModule} from '@angular/core';
import {SeatsioDesignerComponent} from './seatsio-designer/seatsio-designer.component';
import {SeatsioSeatingChartComponent} from './seatsio-seating-chart/seatsio-seating-chart.component';
import {SeatsioEventManagerComponent} from './seatsio-event-manager/seatsio-event-manager.component';
import {SeatsioChartManagerComponent} from './seatsio-chart-manager/seatsio-chart-manager.component';
import {SeatsioComponent} from './seatsio.component';

@NgModule({
  declarations: [
    SeatsioComponent,
    SeatsioDesignerComponent,
    SeatsioSeatingChartComponent,
    SeatsioEventManagerComponent,
    SeatsioChartManagerComponent],
  imports: [],
  exports: [
    SeatsioDesignerComponent,
    SeatsioSeatingChartComponent,
    SeatsioEventManagerComponent,
    SeatsioChartManagerComponent
  ]
})
export class SeatsioAngularModule {
}
