import {Component} from '@angular/core';
import {SeatsioService} from '../seatsio.service';
import {SeatsioComponent} from '../seatsio.component';

@Component({
  selector: 'si-seatsio-event-manager',
  templateUrl: './seatsio-event-manager.component.html',
  styleUrls: ['./seatsio-event-manager.component.css'],
  providers: [SeatsioService]
})
export class SeatsioEventManagerComponent extends SeatsioComponent {

  constructor(seatsioService: SeatsioService) {
    super(seatsioService);
  }

  protected render(config: any) {
    return this.seatsioService.showEventManager(this.config);
  }
}
