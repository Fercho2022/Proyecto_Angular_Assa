import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fecha-fin-intervencion',
  templateUrl: './fecha-fin-intervencion.component.html',
  styleUrls: ['./fecha-fin-intervencion.component.css']
})
export class FechaFinIntervencionComponent {

  @Input() fechaFinIntervencionForm: FormGroup;
  @Output() fechaFinIntervencionChanged = new EventEmitter();


  constructor(private fb: FormBuilder) {
    this.fechaFinIntervencionForm = this.fb.group({
      fechaFinIntervencion: [''], // FormControl específico para "app-nro-intervencion"
    });
  }

  onFechaFinIntervencionChanged() {
    this.fechaFinIntervencionChanged.emit(this.fechaFinIntervencionForm.value);
  }
}
