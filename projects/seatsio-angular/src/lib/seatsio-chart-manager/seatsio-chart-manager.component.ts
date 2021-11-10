import {Component} from '@angular/core';
import {SeatsioService} from '../seatsio.service';
import {SeatsioComponent} from '../seatsio.component';

@Component({
  selector: 'si-seatsio-chart-manager',
  templateUrl: './seatsio-chart-manager.component.html',
  styleUrls: ['./seatsio-chart-manager.component.css'],
  providers: [SeatsioService]
})
export class SeatsioChartManagerComponent extends SeatsioComponent {

  constructor(seatsioService: SeatsioService) {
    super(seatsioService);
  }

  protected render(config: any) {
    return this.seatsioService.showChartManager(config);
  }
}
