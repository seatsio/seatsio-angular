import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Seatsio-angular test page';
  seatingChartConfig = {
    publicKey: "publicDemoKey",
    chartJsUrl: "https://cdn-staging.seatsio.net/chart.js",
    event: "fullExampleWithoutSectionsEvent",
    onRenderStarted: () => {
      console.info('Render Started')
    },
    onChartRendered: () => {
      console.info('Render Finished')
    },
    priceFormatter: price => ('$' + price)
  }

  eventManagerConfig = {
    secretKey: "demoKey",
    chartJsUrl: "https://cdn-staging.seatsio.net/chart.js",
    event: "fullExampleWithoutSectionsEvent",
    mode: "manageObjectStatuses",
    onChartRendered: () => {
      console.info('Render Finished')
    },
  }
}
