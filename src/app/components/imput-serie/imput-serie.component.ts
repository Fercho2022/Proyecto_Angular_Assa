import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imput-serie',
  templateUrl: './imput-serie.component.html',
  styleUrls: ['./imput-serie.component.css']
})
export class ImputSerieComponent {


  @Input() etiquetaLabel!:string;
  @Input() noRetiraEquipo!:boolean;
}
