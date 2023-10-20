import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-equipos-especifico-falla',
  templateUrl: './equipos-especifico-falla.component.html',
  styleUrls: ['./equipos-especifico-falla.component.css']
})
export class EquiposEspecificoFallaComponent {


  @Input() arrayfallas1!:any[];
  @Input() rellenarCampo!:string;
  @Input() etiquetaLabel!:string;
}
