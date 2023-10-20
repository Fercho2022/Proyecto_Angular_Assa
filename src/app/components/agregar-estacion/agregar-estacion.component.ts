import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-agregar-estacion',
  templateUrl: './agregar-estacion.component.html',
  styleUrls: ['./agregar-estacion.component.css'],
})
export class AgregarEstacionComponent {
  distritos!: any[];
  form5: FormGroup;
  valid: boolean = false;
  loading: boolean = false;
  id: undefined;
  titulo1: string = 'Seleccionar distrito';
  titulo2: string = 'Agregar estación';
  estaciones!:any[];
  arrayEstaciones!:any[];
  distrito:any;
  sector:any;

campoInput5!:string;

  constructor(
    private fb: FormBuilder,
    private firestore: FirebaseService,
    private _comunicationService: ComunicacionService
  ) {
    this.campoInput5='estacion';
    this.form5 = this.fb.group({
      estacion: ['', Validators.required],
      distrito: ['', Validators.required],
      sectores:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this._comunicationService.recibirDatos().subscribe((data) => {
      this.distritos = data[0].distritos;
      this.estaciones = data[0].estaciones;
      console.log(this.estaciones)

    });
  }

  guardarEstacion() {


      this.distrito= this.form5.value.distrito;
      this.sector= this.form5.value.sectores;
      console.log(this.form5.value.distrito);
      console.log(this.form5.value.sectores);
      console.log(this.form5.value.estacion);



  }


  seleccionEstacion(){

  }

  seleccionDistrito() {
if (this.form5.value.distrito!==undefined){
  const label=this.form5.value.distrito.label;
  this.arrayEstaciones=[];
  console.log(label);
    switch (label) {
    case 'Rosario':
      this.estaciones.forEach((elements: any) => {
        if (
          elements.label == 'Planta Potabilizadora Rosario' ||
          elements.label == 'Vinculadas Elevadoras cloacales' ||
          elements.label == 'Vinculadas Agua'
        ) {

          this.arrayEstaciones.push(elements);

        }
      });
      console.log(this.arrayEstaciones);


      break;
      case 'Capitan Bermudez':
          this.estaciones.forEach((elements: any) => {
            if (elements.label == 'Capitan Bermudez') {
              this.arrayEstaciones.push(elements);
            }
          });
          console.log(this.arrayEstaciones);
          break;

        case 'Casilda':
          this.estaciones.forEach((elements: any) => {
            if (elements.label == 'Casilda') {
              this.arrayEstaciones.push(elements);
            }
          });
          console.log(this.arrayEstaciones);
          break;
        case 'Firmat':
          this.estaciones.forEach((elements: any) => {
            if (elements.label == 'Firmat') {
              this.arrayEstaciones.push(elements);
            }
          });
          console.log(this.arrayEstaciones);
          break;
        case 'Cañada de Gomez':
          this.estaciones.forEach((elements: any) => {
            if (elements.label == 'Cañada de Gomez') {
              this.arrayEstaciones.push(elements);
            }
          });
          console.log(this.arrayEstaciones);
          break;
        case 'Funes':
          this.estaciones.forEach((elements: any) => {
            if (elements.label == 'Funes') {
              this.arrayEstaciones.push(elements);
            }
          });
          console.log(this.arrayEstaciones);
          break;
        case 'Granadero Baigorria':
          this.estaciones.forEach((elements: any) => {
            if (elements.label == 'Granadero Baigorria') {
              this.arrayEstaciones.push(elements);
            }
          });
          console.log(this.arrayEstaciones);
          break;
          case 'Monje Acueducto':
            this.estaciones.forEach((elements: any) => {
              if (
                elements.label == 'Planta Potabilizadora ACO' ||
                elements.label == 'Estaciones ACO'
              ) {

                this.arrayEstaciones.push(elements);

              }
            });
            console.log(this.arrayEstaciones);
          break;
        case 'Rufino':
          this.estaciones.forEach((elements: any) => {
            if (elements.label == 'Rufino') {
              this.arrayEstaciones.push(elements);
            }
          });
          console.log(this.arrayEstaciones);
          break;
        case 'San Lorenzo':
          this.estaciones.forEach((elements: any) => {
            if (elements.label == 'San Lorenzo') {
              this.arrayEstaciones.push(elements);
            }
          });
          console.log(this.arrayEstaciones);
          break;
        case 'Villa Gdor. Galvez':
          this.estaciones.forEach((elements: any) => {
            if (elements.label == 'Villa Gdor. Galvez') {
              this.arrayEstaciones.push(elements);
            }
          });
          console.log(this.arrayEstaciones);
          break;
      default:
        this.estaciones.forEach((elements: any) => {
          if (elements.label !== '') {
            this.arrayEstaciones.push(elements);
          }
        });
        console.log(this.arrayEstaciones);
        break;

}
this._comunicationService.enviarEstaciones(this.arrayEstaciones);
return;
  }

}


}
