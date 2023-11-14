import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {
  ChartDesignerConfigOptions,
  ChartRendererConfigOptions,
  EventManagerConfigOptions,
  Region,
  SeatingChart,
  Seatsio
} from '@seatsio/seatsio-types';

declare var seatsio: Seatsio;

@Injectable({
  providedIn: 'root'
})
export class SeatsioService implements OnInit, OnDestroy {
  chart: SeatingChart;

  async showDesigner(config: EmbeddableProps<ChartDesignerConfigOptions>) {
    const seatsioInstance = await this.getSeatsio(config.region, config.chartJsUrl);

    delete config['chartJsUrl'];
    delete config['region'];
    return new seatsioInstance.SeatingChartDesigner(config).render();
  }

  async showSeatingChart(config: EmbeddableProps<ChartRendererConfigOptions>) {
    const seatsioInstance = await this.getSeatsio(config.region, config.chartJsUrl);

    delete config['chartJsUrl'];
    delete config['region'];
    return new seatsioInstance.SeatingChart(config).render();
  }

  async showEventManager(config: EmbeddableProps<EventManagerConfigOptions>) {
    const seatsioInstance = await this.getSeatsio(config.region, config.chartJsUrl);

    delete config['chartJsUrl'];
    delete config['region'];
    return new seatsioInstance.EventManager(config).render();
  }

  getSeatsio(region, chartJsUrl) {
    if (typeof seatsio !== 'undefined') {
      return Promise.resolve(seatsio);
    }
    return this.loadSeatsio(region, chartJsUrl);
  }

  loadSeatsio(region, chartJsUrl = 'https://cdn-{region}.seatsio.net/chart.js') {
    return new Promise<Seatsio>((resolve, reject) => {
      const script: HTMLScriptElement = document.createElement('script');
      script.onload = () => resolve(seatsio);
      script.onerror = () => reject(`Could not load ${script.src}`);
      script.src = chartJsUrl.replace('{region}', region);
      document.head.appendChild(script);
    });
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}

export type EmbeddableProps<T> = {
  onRenderStarted?: (chart: SeatingChart) => void
  chartJsUrl?: string
  region: Region
} & T;
