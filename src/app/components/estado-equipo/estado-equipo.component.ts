import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-estado-equipo',
  templateUrl: './estado-equipo.component.html',
  styleUrls: ['./estado-equipo.component.css']
})
export class EstadoEquipoComponent {



  @Input() estadoEquipos!:any[];
  @Input() etiquetaLabel!:string;
  @Input() rellenarCampo!:string;
}
