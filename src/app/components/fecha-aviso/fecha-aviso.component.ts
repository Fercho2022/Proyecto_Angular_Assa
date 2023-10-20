import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fecha-aviso',
  templateUrl: './fecha-aviso.component.html',
  styleUrls: ['./fecha-aviso.component.css']
})
export class FechaAvisoComponent {

  @Input() fechaAvisoForm: FormGroup; // Recibe el FormGroup del componente padre
  @Output() fechaAvisoChanged = new EventEmitter(); // Emite cambios al componente padre



  constructor(private fb: FormBuilder) {
    this.fechaAvisoForm = this.fb.group({
      fechaAvisoIntervencion: [''], // FormControl específico para "app-fecha-aviso"
    });
  }

  onFechaAvisoIntervencionChanged() {
    this.fechaAvisoChanged.emit(this.fechaAvisoForm.value);
  }

}
