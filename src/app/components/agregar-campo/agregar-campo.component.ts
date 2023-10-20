import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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

  constructor(private fb:FormBuilder) {
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

  }
}
