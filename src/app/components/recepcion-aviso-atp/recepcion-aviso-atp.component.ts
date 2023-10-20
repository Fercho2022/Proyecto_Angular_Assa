import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recepcion-aviso-atp',
  templateUrl: './recepcion-aviso-atp.component.html',
  styleUrls: ['./recepcion-aviso-atp.component.css']
})
export class RecepcionAvisoATPComponent {


@Input() rellenarCampo!:string;
  @Input() etiquetaLabel!:string;
  @Input() personalATP!:any[];

}
