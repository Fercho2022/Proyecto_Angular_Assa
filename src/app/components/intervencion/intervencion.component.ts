import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Intervencion } from 'src/app/models/Intervencion';
import { FirebaseService } from 'src/app/services/firebase.service';

import { FileUploadEvent } from 'primeng/fileupload';

import { Datos } from 'src/app/models/Datos';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { Event, Router } from '@angular/router';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-intervencion',
  templateUrl: './intervencion.component.html',
  styleUrls: ['./intervencion.component.css'],
  providers: [],
})
export class IntervencionComponent {
  distritos!: any[];
  equiposEspecificosFalla!: any[];
  grupoFallas!: any[];
  estaciones: any[] = [];
  intervencionForm!: FormGroup;
  PersonalATP!: any[];
  personalDistritos!: any[];
  equiposRetiradosOInstalados!: any[];
  uploadedFiles: any[] = [];
  HuboGastos!: any[];
  detalleGastos!: any[];
  equiposEnFalla!: any[];
  gastaron: boolean = true;
  noRetiraEquipo: boolean = true;
  noInstalaEquipo: boolean = true;
  noEntregaEquipo: boolean = true;
  estadoEquipos!: any[];
  arrayfallas1: any[] = [];
  arrayfallas2: any[] = [];
  arrayfallas3: any[] = [];
  arrayfallas4: any[] = [];
  arrayfallas5: any[] = [];
  fallasDetectadas: any[] = [];
  habCasilleros: boolean = false;
  habCasillero2: boolean = false;
  habCasillero3: boolean = false;
  equiposEnFalla1!: any[];
  distritoFalla: string | undefined;
  eliminarData: boolean = false;
  arrayTotalFallas: any[] = [];
  ocultarAgregar1: boolean = true;
  ocultarAgregar2: boolean = true;
  listDatos: Datos[] = [];
  array: any[] = [];
  arrayFalla: any[] = [];
  dist: any[] = [];
  items!: any;
  arrayPersonalDistritos: any = [];
  equipoRetirado2!: boolean;
  equipoRetirado3!: boolean;

  rehacerBotoneRetirados1!: boolean;
  rehacerBotoneEliminado2!: boolean;
  rehacerBotoneEliminado3!: boolean;
  rehacerBotoneEliminado4!: boolean;
  rehacerBotoneEliminado5!: boolean;
  rehacerBotoneEliminado6!: boolean;
  rehacerBotoneEliminado7!: boolean;
  rehacerBotonAgrega2!: boolean;
  rehacerBotonAgrega3!: boolean;
  rehacerBotonAgrega4!: boolean;
  rehacerBotonAgrega6!: boolean;
  rehacerBotonAgrega7!: boolean;
  rehacerBotonAgrega8!: boolean;
  rehacerBotoneEliminado1!: boolean;
  rehacerBotonAgrega1!: boolean;
  equipoInstalado2!: boolean;
  equipoInstalado3!: boolean;
  agregarEquipoFalla2!: boolean;
  agregarEquipoFalla3!: boolean;
  iluminarBotonAgregar2!: boolean;
  iluminarBotonEliminar2!: boolean;
  iluminarBotonAgregar!: boolean;
  iluminarBotonEliminar!: boolean;
  iluminarBotoneEliminado3!: boolean;
  equipoEntregado2!: boolean;
  rehacerBotoneEliminado8!: boolean;
  rehacerBotonAgrega9!: boolean;
  rehacerBotoneEliminado9!: boolean;
  equipoEntregado3!: boolean;
  SelecNroIntervencion!: Date;


  constructor(
    private fb: FormBuilder,
    private _FirebaseService: FirebaseService,
    private _comunicacionService: ComunicacionService,
    private router: Router
  ) {
    this.intervencionForm = this.fb.group({
      nroIntervencion: [null, Validators.required],
      fechaAvisoIntervencion: [null, Validators.required],
      fechaFinIntervencion: [null, Validators.required],
    });
  }
  // Método para actualizar el FormControl "nroIntervencion" cuando cambie en "app-nro-intervencion"
  updateNroIntervencionValue(value: any) {
    this.intervencionForm.get('nroIntervencion')?.setValue(value.nroIntervencion);
  }

  // Método para actualizar el FormControl "fechaAviso" cuando cambie en "app-fecha-aviso"
  updateFechaAvisoValue(value: any) {
    this.intervencionForm.get('fechaAvisoIntervencion')?.setValue(value.fechaAvisoIntervencion);
  }

  updateFechaFinValue(value: any) {
    this.intervencionForm.get('fechaFinIntervencion')?.setValue(value.fechaFinIntervencion);
  }

  onUpload(event: FileUploadEvent) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  agregarIntervencion() {
    const INTERVENCION: Intervencion = {
      nroIntervencion: this.intervencionForm.value.nroIntervencion,
      fechaAvisoIntervencion: this.intervencionForm.value.fechaAvisoIntervencion,
      fechaFinIntervencion: this.intervencionForm.value.fechaFinIntervencion,


    };
console.log(INTERVENCION);
    this._FirebaseService.AgregarIntervencion(INTERVENCION).then(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    ////
    this.ObtenerDatos();
  }

  AgregarDatosFirebase() {
    const DATOS: Datos = {
      estaciones: this.estaciones,
      estadoEquipos: this.estadoEquipos,
      HuboGastos: this.HuboGastos,
      PersonalATP: this.PersonalATP,
      detalleGastos: this.detalleGastos,
      equiposRetiradosOInstalados: this.equiposRetiradosOInstalados,
      distritos: this.distritos,
      equiposEspecificosFalla: this.equiposEspecificosFalla,
      equiposEnFalla: this.equiposEnFalla,
      personalDistritos: this.personalDistritos,
    };

    this._FirebaseService.agregarCategoria(DATOS).then(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  capturaArray3(array3: any): void {
    this.arrayfallas3 = array3;
  }
  capturaArray4(array4: any): void {
    this.arrayfallas4 = array4;
  }

  capturaEstaciones(array1: any): void {
    this.estaciones = array1;
  }

  capturaPersonalDistritos(event: any): void {
    console.log(event);
    console.log(200);
    this.personalDistritos = event;
  }

  capturaEquipoRetiradoEvent2(retirado: boolean) {
    this.equipoRetirado2 = retirado;
  }
  capturaEventEquipoRetirado3(retirado: boolean) {
    this.equipoRetirado3 = retirado;
  }

  eliminarEventEquipoRetirado2(retirado: boolean) {
    this.equipoRetirado2 = retirado;
  }
  eliminarEventEquipoRetirado3(retirado: boolean) {
    this.equipoRetirado3 = retirado;
  }

  rehacerBotonAgregar2(rehacerBoton: boolean) {
    this.rehacerBotonAgrega2 = rehacerBoton;
  }

  rehacerBotonEliminar2(rehaceBoton: boolean) {
    this.rehacerBotoneEliminado2 = rehaceBoton;
  }
  rehacerBotonEliminar3(rehaceBoton: boolean) {
    this.rehacerBotoneEliminado3 = rehaceBoton;
  }

  iluminarBotonEliminar3(rehaceBoton: boolean) {
    this.iluminarBotoneEliminado3 = rehaceBoton;
  }

  rehacerBotonAgregar3(rehacerBoton: boolean) {
    this.rehacerBotonAgrega1 = rehacerBoton;
  }
  rehacerBotonesRetirados1(rehaceBoton: boolean) {
    this.rehacerBotoneRetirados1 = rehaceBoton;
  }

  eliminarEquipoFallaEvent2(retirado: boolean) {
    this.agregarEquipoFalla2 = retirado;
  }

  eliminarEquipoFallaEvent3(retirado: boolean) {
    this.agregarEquipoFalla3 = retirado;
  }

  capturaEquipoInstaladoEvent2(retirado: boolean) {
    this.equipoInstalado2 = retirado;
  }
  capturaEventEquipoInstalado3(retirado: boolean) {
    this.equipoInstalado3 = retirado;
  }

  eliminarEventEquipoInstalado2(retirado: boolean) {
    this.equipoInstalado2 = retirado;
  }
  eliminarEventEquipoInstalado3(retirado: boolean) {
    this.equipoInstalado3 = retirado;
  }

  iluminarBotoneEliminar3(rehaceBoton: boolean) {
    this.iluminarBotoneEliminado3 = rehaceBoton;
  }

  rehacerBotonAgregar4(rehacerBoton: boolean) {
    this.rehacerBotonAgrega4 = rehacerBoton;
  }

  rehacerBotonEliminar4(rehaceBoton: boolean) {
    this.rehacerBotoneEliminado4 = rehaceBoton;
  }

  rehacerBotonEliminar5(rehaceBoton: boolean) {
    this.rehacerBotoneEliminado5 = rehaceBoton;
  }

  rehacerBotonAgregar5(rehacerBoton: boolean) {
    this.rehacerBotonAgrega6 = rehacerBoton;
  }

  rehacerBotonesRetirados7(rehaceBoton: boolean) {
    this.rehacerBotoneRetirados1 = rehaceBoton;
  }

  rehacerBotonAgregar6(rehacerBoton: boolean) {
    this.rehacerBotonAgrega8 = rehacerBoton;
  }

  rehacerBotonEliminar6(rehaceBoton: boolean) {
    this.rehacerBotoneEliminado8 = rehaceBoton;
  }

  rehacerBotonAgregar7(rehacerBoton: boolean) {
    this.rehacerBotonAgrega9 = rehacerBoton;
  }

  rehacerBotonEliminar7(rehaceBoton: boolean) {
    this.rehacerBotoneEliminado9 = rehaceBoton;
  }
  capturaEquipoEntregadoEvent1(equipoEntregado: boolean) {
    this.equipoEntregado2 = equipoEntregado;
  }

  capturaEquipoFallaEvent2(agregarEquipoFalla: boolean) {
    this.agregarEquipoFalla2 = agregarEquipoFalla;
  }
  capturaEquipoFallaEvent3(agregarEquipoFalla: boolean) {
    this.agregarEquipoFalla3 = agregarEquipoFalla;
  }

  iluminarBotoneAgregar3(iluminarBotonAgregar: boolean) {
    this.iluminarBotonAgregar = iluminarBotonAgregar;
  }

  iluminarBotoneEliminar(iluminarBotonIluminar: boolean) {
    this.iluminarBotonEliminar = iluminarBotonIluminar;
  }

  iluminarBotoneAgregar2(iluminarBotonAgregar: boolean) {
    this.iluminarBotonAgregar2 = !iluminarBotonAgregar;
  }

  iluminarBotoneEliminar2(iluminarBotonEliminar: boolean) {
    this.iluminarBotonEliminar2 = iluminarBotonEliminar;
  }

  capturaEquipoEntregadoEvent2(agregarEquipoEntregado: boolean) {
    this.equipoEntregado3 = agregarEquipoEntregado;
  }

  eliminarEventEquipoEntregado2(eliminarEquipoEntregado: boolean) {
    this.equipoEntregado2 = eliminarEquipoEntregado;
  }

  eliminarEventEquipoEntregado3(eliminarEquipoEntregado: boolean) {
    this.equipoEntregado3 = eliminarEquipoEntregado;
  }

  rehacerBotonEliminar8(rehacerBotonEliminado: boolean) {
    this.rehacerBotoneEliminado8 = rehacerBotonEliminado;
  }
  rehacerBotonAgregar8(rehacerBotonAgregado: boolean) {
    this.rehacerBotonAgrega8 = rehacerBotonAgregado;
  }




  ObtenerDatos() {
    this._FirebaseService.obtenerDatos().subscribe((data) => {
      this.listDatos = [];

      data.forEach((element: any) => {
        this.listDatos.push(element);
        console.log(this.listDatos);
      });
      this.distritos = this.listDatos[0].distritos;
      this._comunicacionService.enviarDatos(this.listDatos);

      this.estaciones = this.listDatos[0].estaciones;
      this.estadoEquipos = this.listDatos[0].estadoEquipos;
      this.PersonalATP = this.listDatos[0].PersonalATP;
      this.equiposEnFalla = this.listDatos[0].equiposEnFalla;
    });
  }
}
