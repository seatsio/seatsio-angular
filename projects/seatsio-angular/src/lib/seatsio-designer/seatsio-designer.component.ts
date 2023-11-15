import {Component, ElementRef} from '@angular/core';
import {EmbeddableProps, SeatsioService} from '../seatsio.service';
import {SeatsioComponent} from '../seatsio.component';
import {ChartDesignerConfigOptions} from '@seatsio/seatsio-types';

@Component({
  selector: 'si-seatsio-designer',
  templateUrl: '../seatsio.component.html',
  providers: [SeatsioService]
})
export class SeatsioDesignerComponent extends SeatsioComponent<ChartDesignerConfigOptions> {

  constructor(seatsioService: SeatsioService, elRef: ElementRef) {
    super(seatsioService, elRef);
  }

  protected render(config: EmbeddableProps<ChartDesignerConfigOptions>) {
    return this.seatsioService.showDesigner(config);
  }
}
