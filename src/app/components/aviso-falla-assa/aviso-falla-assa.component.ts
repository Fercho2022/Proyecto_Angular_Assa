import { Component, Input } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

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
