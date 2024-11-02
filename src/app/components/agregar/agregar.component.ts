import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  valid: boolean = false;

@Input() form!:FormGroup;
@Input() titulo!: string;
@Input() campoInput!: string;
@Input() escribirCampo!: string;
@Input() campo!: string;
@Input() distritoEditar!:any;

estado!:string;


  constructor(
    private fb: FormBuilder,
    private firestore: FirebaseService,

    private _comunicacionService: ComunicacionService,

  ) {

  }

  ngOnInit(): void {

  }

  guardarCampo() {
if(this.form.value.distrito!==undefined){
  const DISTRITO: any = {
    label: this.form.value.distrito
  };
  this.firestore.agregar_Distrito(DISTRITO).then(
    () => {

      this.form.reset();
      console.log(DISTRITO)
    },
    (error) => {
      console.log(error);
    }
  );


}
if(this.form.value.estado!==undefined){
  const ESTADO: any = {
    label: this.form.value.estado
  };
  this.firestore.agregar_Estado(ESTADO).then(
    () => {

      this.form.reset();
      console.log(ESTADO)
    },
    (error) => {
      console.log(error);
    }
  );

}
if(this.form.value.equipo!==undefined){
  const EQUIPO:any= {
    label: this.form.value.equipo
  };
  this.firestore.agregar_Equipo(EQUIPO).then(
    () => {

      this.form.reset();
      console.log(EQUIPO)
    },
    (error) => {
      console.log(error);
    }
  );
}

if(this.form.value.estado!==undefined){
  const ESPECIFICIDAD: any = {
    label: this.form.value.especificidad
  };
  this.firestore.agregar_Especificidad(ESPECIFICIDAD).then(
    () => {

      this.form.reset();
      console.log(ESPECIFICIDAD)
    },
    (error) => {
      console.log(error);
    }
  );




}


setTimeout(() => {
  this._comunicacionService.enviarHabilitarAgregarDistrito(true);
}, 1000);



  }




}
