import { Component, OnInit, Input } from '@angular/core';
import {SeatsioService} from '../seatsio.service';

@Component({
  selector: 'si-seatsio-event-manager',
  templateUrl: './seatsio-event-manager.component.html',
  styleUrls: ['./seatsio-event-manager.component.css'],
  providers: [SeatsioService]
})
export class SeatsioEventManagerComponent implements OnInit {
  @Input() id: String = 'chart';
  @Input() config: object;
  @Input() class: String;

  seatsioService: SeatsioService;

  constructor(seatsioService: SeatsioService) {
    this.seatsioService = seatsioService;
  }

  ngOnInit() {
    this.config['divId'] = this.config['divId'] || 'chart'

    if ('onRenderStarted' in this.config) this.config['onRenderStarted']()

    this.seatsioService.showEventManager(this.config);
  }

}
