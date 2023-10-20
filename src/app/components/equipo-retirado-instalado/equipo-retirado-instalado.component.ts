import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-equipo-retirado-instalado',
  templateUrl: './equipo-retirado-instalado.component.html',
  styleUrls: ['./equipo-retirado-instalado.component.css'],
})
export class EquipoRetiradoInstaladoComponent {
  @Input() listDatos!: any[];
  @Input() equiposEnFalla!: any[];
  @Input() noRetiraEquipo!: boolean;
  @Input() seRetiraBoton!: boolean;
  @Input() seRetiraBoton1!: boolean;
  @Input() estadoEquipos!: any[];
  @Input() rellenarCampo1!: string;
  @Input() rellenarCampo2!: string;
  @Input() rellenarCampo4!: string;
  @Input() etiquetaLabel1!: string;
  @Input() etiquetaLabel2!: string;
  @Input() etiquetaLabel3!: string;
  @Input() etiquetaLabel4!: string;

  @Input() rehacerBotonEliminar!: boolean;
  @Input() rehacerBotonAgregar!: boolean;
  @Output() agregarEquipoRetiradoEvent = new EventEmitter<boolean>();
  @Output() eliminarEquipoRetiradoEvent = new EventEmitter<boolean>();
  @Output() rehacerBotonEliminarEvent = new EventEmitter<boolean>();
  @Output() rehacerBotonAgregarEvent = new EventEmitter<boolean>();

  arrayfallas5!: any[];
  agregarRetirado: boolean;
  retiraBotonEliminar!: boolean;
  retiraBotonAgregar!: boolean;

  constructor() {
    this.agregarRetirado = false;
    this.retiraBotonEliminar = false;
    this.retiraBotonAgregar = true;
  }

  ngOnChanges() {
    if (this.rehacerBotonAgregar) {
      this.retiraBotonAgregar = this.rehacerBotonAgregar;
    }
    if (this.rehacerBotonEliminar) {
      this.retiraBotonEliminar = this.rehacerBotonEliminar;
    }
    if (this.rehacerBotonAgregar && !this.rehacerBotonEliminar) {
      this.retiraBotonAgregar = true;
      this.retiraBotonEliminar = false;
    }


  }

  capturaArray5(array5: any): void {
    this.arrayfallas5 = array5;
  }

  agregarRetiradoInstalado() {
    this.agregarRetirado = true;
    this.retiraBotonAgregar = false;
    this.retiraBotonEliminar = true;

    this.agregarEquipoRetiradoEvent.emit(this.agregarRetirado);
    this.rehacerBotonEliminarEvent.emit(this.retiraBotonEliminar);
    this.rehacerBotonAgregarEvent.emit(this.retiraBotonAgregar);
  }

  eliminarRetiradoInstalado() {
    this.retiraBotonEliminar = true;
    this.retiraBotonAgregar = true;
    this.agregarRetirado = false;
    this.eliminarEquipoRetiradoEvent.emit(this.agregarRetirado);
    this.rehacerBotonEliminarEvent.emit(this.retiraBotonEliminar);
    this.rehacerBotonAgregarEvent.emit(this.retiraBotonAgregar);
  }
}
