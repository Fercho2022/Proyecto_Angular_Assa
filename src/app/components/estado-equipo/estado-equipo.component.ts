import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-estado-equipo',
  templateUrl: './estado-equipo.component.html',
  styleUrls: ['./estado-equipo.component.css']
})
export class EstadoEquipoComponent {



  @Input() estadoEquipos!:any[];
  @Input() etiquetaLabel!:string;
  @Input() rellenarCampo!:string;
  @Input() limpiarDropdown!:boolean;



  @Output() estadoEquipoIntervencionChanged = new EventEmitter();





onEstadoEquipoIntervencionChanged(event:any) {

  this.estadoEquipoIntervencionChanged.emit(event.value);
}

}
