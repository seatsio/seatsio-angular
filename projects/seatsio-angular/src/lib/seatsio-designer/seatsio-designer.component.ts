import {Component, ElementRef} from '@angular/core';
import {SeatsioService} from '../seatsio.service';
import {SeatsioComponent} from '../seatsio.component';

@Component({
  selector: 'si-seatsio-designer',
  templateUrl: '../seatsio.component.html',
  providers: [SeatsioService]
})
export class SeatsioDesignerComponent extends SeatsioComponent {

  constructor(seatsioService: SeatsioService, elRef: ElementRef) {
    super(seatsioService, elRef);
  }

  protected render(config: any) {
    return this.seatsioService.showDesigner(this.config);
  }
}
