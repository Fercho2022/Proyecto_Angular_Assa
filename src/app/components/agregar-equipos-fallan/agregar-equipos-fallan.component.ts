import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion.service';


@Component({
  selector: 'app-agregar-equipos-fallan',
  templateUrl: './agregar-equipos-fallan.component.html',
  styleUrls: ['./agregar-equipos-fallan.component.css'],
})
export class AgregarEquiposFallanComponent {
  @Input() listDatos!: any[];
  @Input() equiposEnFalla!: any[];
  @Input() estadoEquipos!: any[];
  @Input() rellenarCampo1!: string;
  @Input() etiquetaLabel1!: string;
  @Input() etiquetaLabel2!: string;
  @Input() rellenarCampo2!: string;
  @Input() etiquetaLabel3!: string;
  @Input() rellenarCampo3!: string;
  @Input() rehacerBotonEliminar!: boolean;
  @Input() rehacerBotonAgregar!: boolean;



  @Output() agregarEquipoFallaEvent = new EventEmitter<boolean>();
  @Output() eliminarEquipoFallaEvent = new EventEmitter<boolean>();
  @Output() iluminarBotonAgregarEvent = new EventEmitter<boolean>();
  @Output() iluminarBotonEliminarEvent = new EventEmitter<boolean>();


  @Output() equipoFallaIntervencionChanged = new EventEmitter();
  @Output() especificidadEquipoFallaIntervencionChanged = new EventEmitter();
  @Output() estadoEquipoFallaIntervencionChanged = new EventEmitter();
  @Output() dropdownEquipoFallaChanged = new EventEmitter();


  arrayfallas1: any[] = [];
  habCasillero2!: boolean;
  ocultarAgregar1!: boolean;
  retiraBotonAgregar: boolean;
  retiraBotonEliminar: boolean;
  agregarEquiposFallan!: boolean;




  constructor(private _comunicacionService:ComunicacionService) {


    this.agregarEquiposFallan = false;
    this.retiraBotonEliminar = false;
    this.retiraBotonAgregar = true;

  }





  updateEquipoFallaIntervencionValue(value: any) {

    this.equipoFallaIntervencionChanged.emit(value);


  }

  updateEquipoEspecificoFallaIntervencionValue(value: any) {
    this.especificidadEquipoFallaIntervencionChanged.emit(value);

  }

  updateEstadoEquipoFallaIntervencionValue(value: any) {
    this.estadoEquipoFallaIntervencionChanged.emit(value)

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

  capturaArray1(array1: any): void {
    this.arrayfallas1 = array1;
  }

  agregarEquipoFalla() {
    this.agregarEquiposFallan = true;
    this.retiraBotonAgregar = true;
    this.retiraBotonEliminar = true;

    this.agregarEquipoFallaEvent.emit(this.agregarEquiposFallan);
    this.iluminarBotonEliminarEvent.emit(this.retiraBotonEliminar);
    this.iluminarBotonAgregarEvent.emit(this.retiraBotonAgregar);
  }

  RetirarEquipoFalla() {
    this.retiraBotonEliminar = true;
    this.retiraBotonAgregar = true;
    this.agregarEquiposFallan = false;



    this.eliminarEquipoFallaEvent.emit(this.agregarEquiposFallan);
    this.iluminarBotonEliminarEvent.emit(this.retiraBotonEliminar);
    this.iluminarBotonAgregarEvent.emit(this.retiraBotonAgregar);

  }


}
