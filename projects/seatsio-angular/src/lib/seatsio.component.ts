import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SeatsioService} from './seatsio.service';

@Component({template: ''})
export class SeatsioComponent implements OnInit, OnDestroy {
  @Input() id: String = 'chart';
  @Input() config: object;
  @Input() class: String;

  seatsioService: SeatsioService;
  chart: any;

  constructor(seatsioService: SeatsioService) {
    this.seatsioService = seatsioService;
  }

  protected render(config: any) {
    throw new Error('Not implemented');
  }

  async ngOnInit() {
    if (this.config['divId']) {
      this.id = this.config['divId'];
    }

    if ('onRenderStarted' in this.config) {
      this.config['onRenderStarted']();
    }

    this.chart = await this.render(this.config);
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
