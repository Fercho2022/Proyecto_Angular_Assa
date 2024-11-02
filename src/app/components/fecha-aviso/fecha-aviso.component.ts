import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fecha-aviso',
  templateUrl: './fecha-aviso.component.html',
  styleUrls: ['./fecha-aviso.component.css']
})
export class FechaAvisoComponent {


  @Output() fechaAvisoChanged = new EventEmitter(); // Emite cambios al componente padre


  onFechaAvisoIntervencionChanged(value:Date) {
    this.fechaAvisoChanged.emit(value);
  }

}
