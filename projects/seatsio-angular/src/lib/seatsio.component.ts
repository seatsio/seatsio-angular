import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {EmbeddableProps, SeatsioService} from './seatsio.service';
import {CommonConfigOptions, SeatingChart} from '@seatsio/seatsio-types';

@Component({template: ''})
export class SeatsioComponent<T extends CommonConfigOptions> implements OnInit, OnDestroy {

  @Input() config: EmbeddableProps<T>;

  seatsioService: SeatsioService;
  chart: SeatingChart;

  constructor(seatsioService: SeatsioService, private elRef: ElementRef) {
    this.seatsioService = seatsioService;
  }

  protected render(config: EmbeddableProps<T>): Promise<SeatingChart> {
    throw new Error('Not implemented');
  }

  async ngOnInit() {
    this.config['divId'] = undefined;
    this.config['container'] = this.elRef.nativeElement.firstElementChild;

    this.chart = await this.render(this.config);

    if ('onRenderStarted' in this.config) {
      this.config['onRenderStarted'](this.chart);
    }
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}

