# seatsio-angular, the official Seats.io Angular wrapper

Angular 7, 8 and 9 wrapper for rendering [Seats.io](https://www.seats.io) seating charts. Brought to you by the Seats.io team.

# Installation

```
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
config = {
    workspaceKey: "<yourWorkspacePublicKey>",
    event: "<yourEventKey>"
  }
```

```html
<si-seatsio-seating-chart
    [config]="config"
></si-seatsio-seating-chart>
```

### Setting the height of the chart

By default, the chart is as wide as its parent div, and as high as the drawing that's rendered.

To set an explicit height, use CSS on the div that gets created by `<si-seatsio-seating-chart>`:

```css
#chart {
    height: 800px; // or height: 100%, or height: 100vh, depending on your requirements
}
```

### Custom chart div ID

```html
<si-seatsio-seating-chart
    divId="<customId>"
    [config]="config"
></si-seatsio-seating-chart>
```

### Custom chart div class

```html
<si-seatsio-seating-chart
    class="<customClass>"
    [config]="config"
></si-seatsio-seating-chart>
```

### onRenderStarted

`onRenderStarted` is fired when the chart has started loading, but hasn't rendered yet:

```js
config = {
    workspaceKey: "<yourWorkspacePublicKey>",
    event: "<yourEventKey>",
    onRenderStarted: (chart) => {
      console.info('Render Started')
    }
  }
```

If you store the chart object that's passed to `onRenderStarted`, you can access the properties defined on the  wrapped `seatsio.SeatingChart`:

```js
let chart = null

config = {
    workspaceKey: "<yourWorkspacePublicKey>",
    event: "<yourEventKey>",
    onRenderStarted: {createdChart => { chart = createdChart }}
  }
```

### onChartRendered

`onChartRendered` is fired when the chart is rendered successfully:

```js
config = {
    workspaceKey: "<yourWorkspacePublicKey>",
    event: "<yourEventKey>",
    onRenderRendered: (chart) => {
      console.info('Render Finished')
    }
  }
```

### Other parameters

Other parameters are supported as well. For a full list, check https://docs.seats.io/docs/renderer-configure-your-floor-plan

```js
config = {
    workspaceKey: "<yourWorkspacePublicKey>",
    event: "<yourEventKey>",
    pricing: {[
        {'category': 1, 'price': 30},
        {'category': 2, 'price': 40},
        {'category': 3, 'price': 50}
    ]},
    priceFormatter: price => ('$' + price)
  }
```

## Event manager

```js
eventManagerConfig = {
  secretKey: "<yourWorkspaceSecretKey>",
  event: "<yourEventKey>",
  mode: "<manageObjectStatus or another mode>"
}
```

```html
<si-seatsio-event-manager
  [config]="eventManagerConfig"
></si-seatsio-event-manager>
```

Other parameters are supported as well. For a full list, check https://docs.seats.io/docs/event-manager-configuring

## Chart manager

```js
chartManagerConfig = {
  secretKey: "<yourWorkspaceSecretKey>",
  chart: "<yourChartKey>",
  mode: "manageRulesets"
}
```

```html
<si-seatsio-chart-manager
  [config]="chartManagerConfig"
></si-seatsio-chart-manager>
```

Other parameters are supported as well. For a full list, check https://docs.seats.io/docs/chart-manager-configuring

## Seating Chart Designer

To embed the seating chart designer for the purpose of creating a new chart, do this:
```js
seatingChartConfig = {
  workspaceKey: "<yourWorkspacePublicKey>",
  event: "<yourEventKey>",
  onRenderStarted: () => {
    console.info('Render Started')
  },
  onChartRendered: () => {
    console.info('Render Finished')
  },
  priceFormatter: price => ('$' + price)
}
```
```html
<si-seatsio-designer
  [config]="seatingChartConfig"
></si-seatsio-designer>
```

To be able to edit a chart from an embedded designer, you need to specify the chart to load:
 
```js
seatingChartConfig = {
  workspaceKey: "<yourWorkspacePublicKey>",
  event: "<yourEventKey>",
  chartKey: "<yourChartKey>",
  onRenderStarted: () => {
    console.info('Render Started')
  },
  onChartRendered: () => {
    console.info('Render Finished')
  },
  priceFormatter: price => ('$' + price)
}
```

### Setting a height

By default, the chart designer gets rendered with a minimal height. To change that, use CSS on the div that gets created by `<si-seatsio-designer>`:

```css
#chart {
    height: 800px; // or height: 100%, or height: 100vh, depending on your requirements
}
```

### Other parameters

Other parameters are supported as well. For a full list, check https://docs.seats.io/docs/embedded-designer-configuration
