import {Component, ElementRef} from '@angular/core';
import {SeatsioService} from '../seatsio.service';
import {SeatsioComponent} from '../seatsio.component';

@Component({
  selector: 'si-seatsio-event-manager',
  templateUrl: '../seatsio.component.html',
  providers: [SeatsioService]
})
export class SeatsioEventManagerComponent extends SeatsioComponent {

  constructor(seatsioService: SeatsioService, elRef: ElementRef) {
    super(seatsioService, elRef);
  }

  protected render(config: any) {
    return this.seatsioService.showEventManager(this.config);
  }
}
