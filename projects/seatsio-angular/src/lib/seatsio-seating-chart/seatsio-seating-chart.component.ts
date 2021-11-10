import {Component} from '@angular/core';
import {SeatsioService} from '../seatsio.service';
import {SeatsioComponent} from '../seatsio.component';

@Component({
  selector: 'si-seatsio-seating-chart',
  templateUrl: './seatsio-seating-chart.component.html',
  styleUrls: ['./seatsio-seating-chart.component.css'],
  providers: [SeatsioService]
})
export class SeatsioSeatingChartComponent extends SeatsioComponent {

  constructor(seatsioService: SeatsioService) {
    super(seatsioService);
  }

  protected render(config: any) {
    return this.seatsioService.showSeatingChart(this.config);
  }
}
