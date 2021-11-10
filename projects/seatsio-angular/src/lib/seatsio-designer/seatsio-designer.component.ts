import {Component} from '@angular/core';
import {SeatsioService} from '../seatsio.service';
import {SeatsioComponent} from '../seatsio.component';

@Component({
  selector: 'si-seatsio-designer',
  templateUrl: './seatsio-designer.component.html',
  styleUrls: ['./seatsio-designer.component.css'],
  providers: [SeatsioService]
})
export class SeatsioDesignerComponent extends SeatsioComponent {

  constructor(seatsioService: SeatsioService) {
    super(seatsioService);
  }

  protected render(config: any) {
    return this.seatsioService.showDesigner(this.config);
  }
}
