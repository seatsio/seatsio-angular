import {Injectable, OnDestroy, OnInit} from '@angular/core';

declare var seatsio: any;

@Injectable({
  providedIn: 'root'
})
export class SeatsioService implements OnInit, OnDestroy {
  chart: any;

  async showDesigner(config) {
    const seatsioInstance = await this.getSeatsio(config.region, config.chartJsUrl);

    delete config['chartJsUrl'];
    delete config['region'];
    const chart = new seatsioInstance.SeatingChartDesigner(config).render();
    return chart;
  }

  async showSeatingChart(config) {
    const seatsioInstance = await this.getSeatsio(config.region, config.chartJsUrl);

    delete config['chartJsUrl'];
    delete config['region'];
    const chart = new seatsioInstance.SeatingChart(config).render();
    return chart;
  }

  async showEventManager(config) {
    const seatsioInstance = await this.getSeatsio(config.region, config.chartJsUrl);

    delete config['chartJsUrl'];
    delete config['region'];
    const chart = new seatsioInstance.EventManager(config).render();
    return chart;
  }

  async showChartManager(config) {
    const seatsioInstance = await this.getSeatsio(config.region, config.chartJsUrl);

    delete config['chartJsUrl'];
    delete config['region'];
    const chart = new seatsioInstance.ChartManager(config).render();
    return chart;
  }

  getSeatsio(region, chartJsUrl) {
    if (typeof seatsio !== 'undefined') {
      return Promise.resolve(seatsio);
    }
    return this.loadSeatsio(region, chartJsUrl);
  }

  loadSeatsio(region, chartJsUrl = 'https://cdn-{region}.seatsio.net/chart.js') {
    return new Promise((resolve, reject) => {
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
