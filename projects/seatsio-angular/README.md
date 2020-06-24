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

Minimal:

Make sure you expose `config` in your component. For example:

```js
config = {
    publicKey: "<yourPublicKey>",
    event: "<yourEventKey>"
  }
```

```html
<si-seatsio-seating-chart
    [config]="config"
></si-seatsio-seating-chart>
```

Custom chart div ID:

```html
<si-seatsio-seating-chart
    divId="<customId>"
    [config]="config"
></si-seatsio-seating-chart>
```

Custom chart div class:

```html
<si-seatsio-seating-chart
    class="<customClass>"
    [config]="config"
></si-seatsio-seating-chart>
```

`onRenderStarted` is fired when the chart has started loading, but hasn't rendered yet:

```js
config = {
    publicKey: "<yourPublicKey>",
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
    publicKey: "<yourPublicKey>",
    event: "<yourEventKey>",
    onRenderStarted: {createdChart => { chart = createdChart }}
  }
```

`onChartRendered` is fired when the chart is rendered successfully:

```js
config = {
    publicKey: "<yourPublicKey>",
    event: "<yourEventKey>",
    onRenderRendered: (chart) => {
      console.info('Render Finished')
    }
  }
```

Other parameters are supported as well. For a full list, check https://docs.seats.io/docs/renderer-configure-your-floor-plan

```js
config = {
    publicKey: "<yourPublicKey>",
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
  secretKey: "<yourSecretKey>",
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
  secretKey: "<yourSecretKey>",
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
  publicKey: "<yourPublicKey>",
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
  publicKey: "<yourPublicKey>",
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

    

Other parameters are supported as well. For a full list, check https://docs.seats.io/docs/embedded-designer-configuration
