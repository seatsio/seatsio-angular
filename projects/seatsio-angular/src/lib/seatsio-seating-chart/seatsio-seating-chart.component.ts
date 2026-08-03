import {Component, ElementRef} from '@angular/core';
import {EmbeddableProps, SeatsioService} from '../seatsio.service';
import {SeatsioComponent} from '../seatsio.component';
import {ChartRendererConfigOptions} from '@seatsio/seatsio-types';

@Component({
  selector: 'si-seatsio-seating-chart',
  templateUrl: '../seatsio.component.html',
  providers: [SeatsioService]
})
export class SeatsioSeatingChartComponent extends SeatsioComponent<ChartRendererConfigOptions> {

  constructor(seatsioService: SeatsioService, elRef: ElementRef) {
    super(seatsioService, elRef);
  }

  protected render(config: EmbeddableProps<ChartRendererConfigOptions>) {
    return this.seatsioService.showSeatingChart(config);
  }
}
