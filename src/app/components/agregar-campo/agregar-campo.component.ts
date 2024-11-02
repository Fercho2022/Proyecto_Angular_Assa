import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComunicacionService } from 'src/app/services/comunicacion.service';


@Component({
  selector: 'app-agregar-campo',
  templateUrl: './agregar-campo.component.html',
  styleUrls: ['./agregar-campo.component.css'],
})
export class AgregarCampoComponent {

form1!:FormGroup;
campoInput1!:string;
form2!:FormGroup;
campoInput2!:string;
form3!:FormGroup;
campoInput3!:string;
form4!:FormGroup;
campoInput4!:string;
habilitoAgregar:boolean=true;
habilitoEquipo:boolean=true;
camposListarDistritos!:any[];
camposListarEquiposEnFalla!:any[];
titulo:string='Agregar distrito';
distritoEdit!:any;


  constructor(private fb:FormBuilder, private _comunicationService:ComunicacionService) {
this.campoInput1='distrito';
this.campoInput2='estado';
this.campoInput3='equipo';
this.campoInput4='especificidad';
this.form1=this.fb.group({
  distrito: ['', Validators.required],
});
this.form2=this.fb.group({
  estado: ['', Validators.required],
});
this.form3=this.fb.group({
  equipo: ['', Validators.required],
});
this.form4=this.fb.group({
  especificidad: ['', Validators.required],
});

  }

  ngOnInit() {
this._comunicationService.recibirHabilitaAgregarDistrito().subscribe((data)=>{
this.habilitoAgregar=data;
this.titulo='Agregar distrito';
})
this._comunicationService.recibirHabilitaAgregarEquipo().subscribe((data)=>{
  this.habilitoEquipo=data;


})
this._comunicationService.recibirHabilitaEditarDistrito().subscribe((ObjetoDistrito)=>{
  this.habilitoAgregar=ObjetoDistrito.habilitoEditar;
   this.titulo='Editar distrito';
   this.distritoEdit=ObjetoDistrito.distrito;

})
this._comunicationService.recibirDatos().subscribe((data)=>{
this.camposListarDistritos=data[0].distritos;
this.camposListarEquiposEnFalla=data[0].equiposEnFalla;
})

  }
}
