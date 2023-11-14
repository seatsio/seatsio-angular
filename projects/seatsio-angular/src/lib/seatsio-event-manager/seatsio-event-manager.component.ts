import {Component, ElementRef} from '@angular/core';
import {EmbeddableProps, SeatsioService} from '../seatsio.service';
import {SeatsioComponent} from '../seatsio.component';
import {EventManagerConfigOptions} from '@seatsio/seatsio-types';

@Component({
  selector: 'si-seatsio-event-manager',
  templateUrl: '../seatsio.component.html',
  providers: [SeatsioService]
})
export class SeatsioEventManagerComponent extends SeatsioComponent<EventManagerConfigOptions> {

  constructor(seatsioService: SeatsioService, elRef: ElementRef) {
    super(seatsioService, elRef);
  }

  protected render(config: EmbeddableProps<EventManagerConfigOptions>) {
    return this.seatsioService.showEventManager(config);
  }
}
