import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-estacion-falla',
  templateUrl: './estacion-falla.component.html',
  styleUrls: ['./estacion-falla.component.css']
})
export class EstacionFallaComponent {

@Input() rellenarCampo!:string;
@Input() etiquetaLabel!:string;
@Input() estaciones!:any[];


  @Output() estacionIntervencionChanged = new EventEmitter();
   // Variable para realizar un seguimiento del envío del formulario




  onEstacionIntervencionChanged(value:any) {

    this.estacionIntervencionChanged.emit(value);
  }
}
