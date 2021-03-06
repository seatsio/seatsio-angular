import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Seatsio-angular test page';

  designerConfig = {
    class: "designer",
    designerKey: "demoDesignerKey",
    chartJsUrl: "https://cdn-staging-{region}.seatsio.net/chart.js",
    region: "eu",
    onExitRequested: () => console.log("Exit Requested"),
    onChartCreated: key => console.log("Chart Created", key)
  }

  seatingChartConfig = {
    publicKey: "publicDemoKey",
    chartJsUrl: "https://cdn-staging-{region}.seatsio.net/chart.js",
    region: "eu",
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
    chartJsUrl: "https://cdn-staging-{region}.seatsio.net/chart.js",
    region: "eu",
    event: "fullExampleWithoutSectionsEvent",
    mode: "manageObjectStatuses",
    onChartRendered: () => {
      console.info('Render Finished')
    }
  }

  chartManagerConfig = {
    secretKey: "demoKey",
    chartJsUrl: "https://cdn-staging-{region}.seatsio.net/chart.js",
    region: "eu",
    chart: "demoChartSmallTheatre",
    mode: "manageRulesets",
    onChartRendered: () => {
      console.info('Render Finished')
    },
  }
}
