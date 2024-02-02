# seatsio-angular, the official Seats.io Angular SDK

Angular wrapper for rendering [Seats.io](https://www.seats.io) seating charts. Brought to you by the Seats.io team.

The minimum Angular version is the [current lowest LTS version](https://angular.io/guide/releases#support-policy-and-schedule). 
Lower versions may work, but are not officially supported.  

# Installation

```
yarn add @seatsio/seatsio-angular
# or
npm install --save @seatsio/seatsio-angular
```

# Usage

Import SeatsioAngularModule in your own module:

```js
import { SeatsioAngularModule } from '@seatsio/seatsio-angular';

@NgModule({
  ...
  imports: [
    SeatsioAngularModule
  ]
  ...
})
```

## Regular charts

### Minimal

Make sure you expose `config` in your component. For example:

```js
import {ChartRendererConfigOptions} from '@seatsio/seatsio-types';
import {EmbeddableProps} from 'seatsio-angular';

const config: EmbeddableProps<ChartRendererConfigOptions> = {
    region: "<yourRegion>", // e.g. "eu"
    workspaceKey: "<yourWorkspacePublicKey>",
    event: "<yourEventKey>"
  }
```

```html
<div style="height: 500px">
  <si-seatsio-seating-chart [config]="config"></si-seatsio-seating-chart>
</div>
```
The chart uses 100% of the width and height of the DOM element (e.g. a div) in which you render it. Play with the size of that element
to change the chart size.

### onRenderStarted

`onRenderStarted` is fired when the chart has started loading, but hasn't rendered yet:

```js
import {ChartRendererConfigOptions} from '@seatsio/seatsio-types';
import {EmbeddableProps} from 'seatsio-angular';

const config: EmbeddableProps<ChartRendererConfigOptions> = {
  region: "<yourRegion>",
  workspaceKey: "<yourWorkspacePublicKey>",
  event: "<yourEventKey>",
  onRenderStarted: (chart) => {
    console.info('Render Started')
  }
}
```

If you store the chart object that's passed to `onRenderStarted`, you can access the properties defined on the  wrapped `seatsio.SeatingChart`:

```js
import {ChartRendererConfigOptions} from '@seatsio/seatsio-types';
import {EmbeddableProps} from 'seatsio-angular';

let chart = null

const config: EmbeddableProps<ChartRendererConfigOptions> = {
    region: "<yourRegion>",
    workspaceKey: "<yourWorkspacePublicKey>",
    event: "<yourEventKey>",
    onRenderStarted: createdChart => { chart = createdChart }
}
```

### onChartRendered

`onChartRendered` is fired when the chart is rendered successfully:

```js
import {ChartRendererConfigOptions} from '@seatsio/seatsio-types';
import {EmbeddableProps} from 'seatsio-angular';

const config: EmbeddableProps<ChartRendererConfigOptions> = {
    region: "<yourRegion>",
    workspaceKey: "<yourWorkspacePublicKey>",
    event: "<yourEventKey>",
    onRenderRendered: (chart) => {
      console.info('Render Finished')
    }
}
```

### Other parameters

Other parameters are supported as well. For a full list, check https://docs.seats.io/docs/renderer/embed-a-floor-plan

```js
import {ChartRendererConfigOptions} from '@seatsio/seatsio-types';
import {EmbeddableProps} from 'seatsio-angular';

const config: EmbeddableProps<ChartRendererConfigOptions> = {
    region: "<yourRegion>",
    workspaceKey: "<yourWorkspacePublicKey>",
    event: "<yourEventKey>",
    pricing: [
        {'category': 1, 'price': 30},
        {'category': 2, 'price': 40},
        {'category': 3, 'price': 50}
    ],
    priceFormatter: price => ('$' + price)
}
```

## Event manager

```js
import {EventManagerConfigOptions} from '@seatsio/seatsio-types';
import {EmbeddableProps} from 'seatsio-angular';

const eventManagerConfig: EmbeddableProps<EventManagerConfigOptions> = {
  region: "<yourRegion>",
  secretKey: "<yourWorkspaceSecretKey>",
  event: "<yourEventKey>",
  mode: "<manageObjectStatus or another mode>"
}
```

```html
<div style="height: 500px">
    <si-seatsio-event-manager [config]="eventManagerConfig"></si-seatsio-event-manager>
</div>
```

Other parameters are supported as well. For a full list, check https://docs.seats.io/docs/event-manager-configuring

## Seating Chart Designer

To embed the seating chart designer for the purpose of creating a new chart, do this:
```js
import {ChartDesignerConfigOptions} from '@seatsio/seatsio-types';
import {EmbeddableProps} from 'seatsio-angular';

const designerConfig: EmbeddableProps<ChartDesignerConfigOptions> = {
  region: "<yourRegion>",
  secretKey: "<yourWorkspaceSecretKey>"
}
```
```html
<div style="height: 500px">
    <si-seatsio-designer [config]="designerConfig"></si-seatsio-designer>
</div>
```

To be able to edit a chart from an embedded designer, you need to specify the chart to load:
 
```js
import {ChartDesignerConfigOptions} from '@seatsio/seatsio-types';
import {EmbeddableProps} from 'seatsio-angular';

const designerConfig: EmbeddableProps<ChartDesignerConfigOptions> = {
  region: "<yourRegion>",
  secretKey: "<yourWorkspaceSecretKey>",
  chartKey: "<yourChartKey>"
}
```

### Other parameters

Other parameters are supported as well. For a full list, check https://docs.seats.io/docs/embedded-designer/introduction
