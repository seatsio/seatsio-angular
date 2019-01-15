import {Injectable, OnDestroy, OnInit} from '@angular/core';

declare var seatsio: any;

@Injectable({
  providedIn: 'root'
})
export class SeatsioService implements OnInit, OnDestroy {
  chart: any;

  async createChart(config) {
    const seatsioInstance = await this.getSeatsio(config.chartJsUrl);

    const chart = new seatsioInstance.SeatingChartDesigner(config).render();
    return chart;
  }

  getSeatsio(chartJsUrl) {
    if (typeof seatsio !== 'undefined') {
      return Promise.resolve(seatsio);
    }
    return this.loadSeatsio(chartJsUrl);
  }

  loadSeatsio(chartJsUrl) {
    return new Promise((resolve, reject) => {
      const script: HTMLScriptElement = document.createElement('script');
      script.onload = () => resolve(seatsio);
      script.onerror = () => reject(`Could not load ${script.src}`);
      script.src = chartJsUrl.toString();
      document.head.appendChild(script);
    });
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}
