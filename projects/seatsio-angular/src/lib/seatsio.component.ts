import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {SeatsioService} from './seatsio.service';

@Component({template: ''})
export class SeatsioComponent implements OnInit, OnDestroy {

  @Input() config: object;

  seatsioService: SeatsioService;
  chart: any;

  constructor(seatsioService: SeatsioService, private elRef: ElementRef) {
    this.seatsioService = seatsioService;
  }

  protected render(config: any) {
    throw new Error('Not implemented');
  }

  async ngOnInit() {
    this.config['divId'] = undefined;
    this.config['container'] = this.elRef.nativeElement.firstElementChild;

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
