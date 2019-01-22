import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';
  config = {
    publicKey: "publicDemoKey",
    chartJsUrl: "https://cdn-staging.seatsio.net/chart.js",
    event: "fullExampleWithoutSectionsEvent",
    onRenderStarted: () => {
      console.info('Render Started')
    },
    onChartRendered: () => {
      console.info('Render Finished')
    },
  }
}
