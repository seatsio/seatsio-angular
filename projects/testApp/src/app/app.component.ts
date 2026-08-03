import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ChartDesignerConfigOptions, ChartRendererConfigOptions, EventManagerConfigOptions} from '@seatsio/seatsio-types';
import {EmbeddableProps} from 'seatsio-angular';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AppComponent {
  title = 'Seatsio-angular test page';
  shown = true;

  designerConfig: () => EmbeddableProps<ChartDesignerConfigOptions> = () => ({
    class: 'designer',
    secretKey: 'demoKey',
    chartJsUrl: 'https://cdn-staging-{region}.seatsio.net/chart.js',
    region: 'eu',
    onExitRequested: () => console.log('Exit Requested'),
    onChartCreated: key => console.log('Chart Created', key)
  })

  seatingChartConfig: () => EmbeddableProps<ChartRendererConfigOptions> = () => ({
    workspaceKey: 'publicDemoKey',
    event: 'fullExampleWithoutSectionsEvent',
    chartJsUrl: 'https://cdn-staging-{region}.seatsio.net/chart.js',
    region: 'eu',
    onRenderStarted: () => {
      console.info('Render Started');
    },
    onChartRendered: () => {
      console.info('Render Finished');
    },
    priceFormatter: price => ('$' + price)
  })

  eventManagerConfig: () => EmbeddableProps<EventManagerConfigOptions> = () => ({
    secretKey: 'demoKey',
    chartJsUrl: 'https://cdn-staging-{region}.seatsio.net/chart.js',
    region: 'eu',
    event: 'fullExampleWithoutSectionsEvent',
    mode: 'manageObjectStatuses',
    onChartRendered: () => {
      console.info('Render Finished');
    }
  })

  onToggle = () => {
    this.shown = !this.shown;
  }
}
