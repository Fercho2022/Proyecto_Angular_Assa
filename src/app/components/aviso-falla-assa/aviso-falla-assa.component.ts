import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aviso-falla-assa',
  templateUrl: './aviso-falla-assa.component.html',
  styleUrls: ['./aviso-falla-assa.component.css']
})
export class AvisoFallaAssaComponent {


  @Input() personalDistritos!:any[];
  @Input() etiquetaLabel!:string;
  @Input() rellenarCampo!:string;
}
