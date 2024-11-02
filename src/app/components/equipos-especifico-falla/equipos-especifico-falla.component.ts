import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-equipos-especifico-falla',
  templateUrl: './equipos-especifico-falla.component.html',
  styleUrls: ['./equipos-especifico-falla.component.css']
})
export class EquiposEspecificoFallaComponent {


  @Input() arrayfallas1!:any[];
  @Input() rellenarCampo!:string;
  @Input() etiquetaLabel!:string;



  @Output() equipoEspecificoFallaIntervencionChanged = new EventEmitter();



  onEquipoEspecificoFallaIntervencionChanged(event:any) {

    this.equipoEspecificoFallaIntervencionChanged.emit(event.value);
  }



}
