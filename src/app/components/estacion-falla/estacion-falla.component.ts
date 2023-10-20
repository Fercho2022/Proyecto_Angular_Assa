import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-estacion-falla',
  templateUrl: './estacion-falla.component.html',
  styleUrls: ['./estacion-falla.component.css']
})
export class EstacionFallaComponent {

@Input() rellenarCampo!:string;
@Input() etiquetaLabel!:string;
@Input() estaciones!:any[];

}
