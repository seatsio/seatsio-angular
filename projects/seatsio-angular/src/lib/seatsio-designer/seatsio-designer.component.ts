import {Component, Input, OnInit} from '@angular/core';
import {SeatsioService} from '../seatsio.service';

@Component({
  selector: 'si-seatsio-designer',
  templateUrl: './seatsio-designer.component.html',
  styleUrls: ['./seatsio-designer.component.css'],
  providers: [SeatsioService]
})
export class SeatsioDesignerComponent implements OnInit {
  @Input() designerKey: String;
  @Input() id: String = 'chart';
  @Input() className: String;
  @Input() chartJsUrl: String;

  seatsioService: SeatsioService;

  constructor(seatsioService: SeatsioService) {
    this.seatsioService = seatsioService;
  }

  ngOnInit() {
    const config = {
      divId: this.id,
      designerKey: this.designerKey,
      chartJsUrl: this.chartJsUrl
    };

    this.seatsioService.createChart(config).then(res => {
      console.log(res);
    });
  }
}
