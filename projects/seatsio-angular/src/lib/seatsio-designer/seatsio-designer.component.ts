import {Component, Input, OnInit} from '@angular/core';
import {SeatsioService} from '../seatsio.service';

@Component({
  selector: 'si-seatsio-designer',
  templateUrl: './seatsio-designer.component.html',
  styleUrls: ['./seatsio-designer.component.css'],
  providers: [SeatsioService]
})
export class SeatsioDesignerComponent implements OnInit {
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

    this.seatsioService.showDesigner(this.config);
  }
}
