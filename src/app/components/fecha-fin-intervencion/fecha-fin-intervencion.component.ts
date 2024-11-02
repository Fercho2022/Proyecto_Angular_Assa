import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-fecha-fin-intervencion',
  templateUrl: './fecha-fin-intervencion.component.html',
  styleUrls: ['./fecha-fin-intervencion.component.css']
})
export class FechaFinIntervencionComponent {


  @Output() fechaFinIntervencionChanged = new EventEmitter();


  onFechaFinIntervencionChanged(value:Date) {
    this.fechaFinIntervencionChanged.emit(value);
  }
}
