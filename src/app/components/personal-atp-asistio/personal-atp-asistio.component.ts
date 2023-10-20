import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personal-atp-asistio',
  templateUrl: './personal-atp-asistio.component.html',
  styleUrls: ['./personal-atp-asistio.component.css']
})
export class PersonalATPAsistioComponent {



  @Input() personalATP!:any[];
  @Input() etiquetaLabel!:string;
}
