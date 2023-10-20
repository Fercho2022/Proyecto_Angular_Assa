import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-nro-intervencion',
  templateUrl: './nro-intervencion.component.html',
  styleUrls: ['./nro-intervencion.component.css']
})
export class NroIntervencionComponent {

@Input() nroIntervencionForm: FormGroup;
@Output() nroIntervencionChanged = new EventEmitter();
 // Variable para realizar un seguimiento del envío del formulario


constructor(private fb: FormBuilder) {
  this.nroIntervencionForm = this.fb.group({
    nroIntervencion: [null, Validators.required], // FormControl específico para "app-nro-intervencion"

  });
}

onNroIntervencionChanged() {
  this.nroIntervencionChanged.emit(this.nroIntervencionForm.value);
}





}
