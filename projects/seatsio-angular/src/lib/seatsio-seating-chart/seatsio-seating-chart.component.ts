import { Component, OnInit, Input } from '@angular/core';
import {SeatsioService} from '../seatsio.service';

@Component({
  selector: 'si-seatsio-seating-chart',
  templateUrl: './seatsio-seating-chart.component.html',
  styleUrls: ['./seatsio-seating-chart.component.css'],
  providers: [SeatsioService]
})
export class SeatsioSeatingChartComponent implements OnInit {
  @Input() id: String = 'chart';
  @Input() config: object;
  @Input() class: String;


  seatsioService: SeatsioService;

  constructor(seatsioService: SeatsioService) {
    this.seatsioService = seatsioService;
  }

  ngOnInit() {
    this.config['divId'] = this.config['divId'] || 'chart'

    if ('onRenderStarted' in this.config) this.config['onRenderStarted']()

    this.seatsioService.showSeatingChart(this.config);

  }

}
