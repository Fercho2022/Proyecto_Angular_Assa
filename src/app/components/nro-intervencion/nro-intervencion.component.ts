import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-nro-intervencion',
  templateUrl: './nro-intervencion.component.html',
  styleUrls: ['./nro-intervencion.component.css']
})
export class NroIntervencionComponent {


@Output() nroIntervencionChanged = new EventEmitter();


onNroIntervencionChanged(value:Date) {

  this.nroIntervencionChanged.emit(value);
}





}
