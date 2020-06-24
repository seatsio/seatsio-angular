import { Component, OnInit, Input } from '@angular/core';
import {SeatsioService} from '../seatsio.service';

@Component({
  selector: 'si-seatsio-chart-manager',
  templateUrl: './seatsio-chart-manager.component.html',
  styleUrls: ['./seatsio-chart-manager.component.css'],
  providers: [SeatsioService]
})
export class SeatsioChartManagerComponent implements OnInit {
  @Input() id: String = 'chart';
  @Input() config: object;
  @Input() class: String;

  seatsioService: SeatsioService;

  constructor(seatsioService: SeatsioService) {
    this.seatsioService = seatsioService;
  }

  ngOnInit() {
    if (this.config['divId']) {
      this.id = this.config['divId'];
    }

    if ('onRenderStarted' in this.config) this.config['onRenderStarted']()

    this.seatsioService.showChartManager(this.config);
  }

}
