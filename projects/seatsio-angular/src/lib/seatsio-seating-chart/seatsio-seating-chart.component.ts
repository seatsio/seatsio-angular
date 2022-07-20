import {Component, ElementRef} from '@angular/core';
import {SeatsioService} from '../seatsio.service';
import {SeatsioComponent} from '../seatsio.component';

@Component({
  selector: 'si-seatsio-seating-chart',
  templateUrl: '../seatsio.component.html',
  providers: [SeatsioService]
})
export class SeatsioSeatingChartComponent extends SeatsioComponent {

  constructor(seatsioService: SeatsioService, elRef: ElementRef) {
    super(seatsioService, elRef);
  }

  protected render(config: any) {
    return this.seatsioService.showSeatingChart(this.config);
  }
}
