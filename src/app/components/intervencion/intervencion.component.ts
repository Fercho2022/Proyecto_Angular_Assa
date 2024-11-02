import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Intervencion } from 'src/app/models/Intervencion';
import { FirebaseService } from 'src/app/services/firebase.service';

import { FileUploadEvent } from 'primeng/fileupload';

import { Datos } from 'src/app/models/Datos';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { Event, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-intervencion',
  templateUrl: './intervencion.component.html',
  styleUrls: ['./intervencion.component.css'],
  providers: [MessageService],
})
export class IntervencionComponent {


estaciones:any[]=[]
  estacionesRosarioPlanta: any[] = [];
  estacionesRosarioVinculadasAgua: any[] = [];
  estacionesRosarioVinculadasCloacales: any[] = [];
  estacionesBermudez: any[] = [];
  estacionesCasilda: any[] = [];
  estacionesFirmat: any[] = [];
  estacionesCañada: any[] = [];
  estacionesFunes: any[] = [];
  estacionesBaigorria: any[] = [];
  estacionesAcoPlanta: any[] = [];
  estacionesAco: any[] = [];
  estacionesRufino: any[] = [];
  estacionesSanLorenzo: any[] = [];
  estacionesGalvez: any[] = [];
  estadoEquipos: any[]= []
  HuboGastos: any[]= [];
  PersonalATP: any[]= [];
  detalleGastos: any[]= [];
  equiposRetiradosOInstalados: any[]= [];
  distritos: any[]= [];

  equiposEspecificosProcesadores: any[]= [];
  equiposEspecificosModulosM340: any[]= [];
  equiposEspecificosModulosM221: any[]= [];
  equiposEspecificosModulosTwido: any[]= [];
  equiposEspecificosModulosPremium: any[]= [];
  equiposEspecificosModulosMicro: any[]= [];
  equiposEspecificosComandoBomba: any[]= [];
  equiposEspecificosVariadores: any[]= [];
  equiposEspecificosRadios: any[]= [];
  equiposEspecificosArrancadores: any[]= [];
  equiposEnFalla: any[]= [];

  personalDistritos: any[]= [];
  intervencionForm: FormGroup;
  uploadedFiles: any[] = [];

  grupoFallas: any[]= [];

  gastaron: boolean = true;
  noRetiraEquipo: boolean = true;
  noInstalaEquipo: boolean = true;
  noEntregaEquipo: boolean = true;

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
  personalGuardiaCasilda: any[]=[];
  JefePlantaCasilda:any[]=[];
  JefeDistritoCasilda: any[]=[];
  personalGuardiaCañada: any[]=[];
  JefePlantaCañada: any[]=[];
  JefeDistritoCañada: any[]=[];
  personalGuardiaFirmat: any[]=[];
  JefePlantaFirmat: any[]=[];
  JefeDistritoFirmat: any[]=[];
  JefePlantaRufino: any[]=[];
  JefeDistritoRufino: any[]=[];
  personalGuardiaSanLorenzo: any[]=[];
  JefePlantaSanLorenzo: any[]=[];
  JefeDistritoSanLorenzo: any[]=[];
  JefePlantaAco: any[]=[];
  JefeTransporteAco: any[]=[];
  JefeDistritoAco: any[]=[];
  JefeProduccionAco: any[]=[];
  personalGuardiaFunes:any[]=[];
  JefePlantaFunes:any[]=[];
  JefeDistritoFunes: any[]=[];
  personalGuardiaRosario: any[]=[];
  JefePlantaRosario: any[]=[];
  JefeDistritoRosario: any[]=[];
  personalGuardiaGalvez: any[]=[];
  JefePlantaGalvez: any[]=[];
  personalGuardiaRufino: any[]=[];
  personalGuardiaAco: any[]=[];
  JefeDistritoGalvez: any[]=[];
  CcrRosario: any[]=[];
  JefeTurnoRosario: any[]=[];
  personalGuardiaBermudez:any[]=[];
  JefePlantaBermudez: any[]=[];
  JefeDistritoBermudez: any[]=[];

  equiposEspecificosTransmisoresNivel: any[]=[];
  equiposEspecificosTransmisoresPresion: any[]=[];
  equiposEspecificosTransmisoresCaudal: any[]=[];
  equiposEspecificosTransmisoresCloro:any[]=[];
  equiposEspecificosTransmisoresTemperatura: any[]=[];
  equiposEspecificosTransmisoresPh: any[]=[];
  equiposEspecificosTransmisoresMovimiento: any[]=[];
  equiposEspecificosSensoresCaudal: any[]=[];
  equiposEspecificosSensoresConductividad: any[]=[];
  equiposEspecificosSensoresPh: any[]=[];
  equiposEspecificosSensoresCloro:any[]=[];
  equiposEspecificosSensoresTemperatura: any[]=[];
  equiposEspecificosSensoresMovimiento: any[]=[];
  equiposEspecificosDisplay: any[]=[];
  equiposEspecificosFuentes12V: any[]=[];
  equiposEspecificosFuentes24V:any[]=[];
  equiposEspecificosBoyas: any[]=[];
  equiposEspecificosSwitchEthernet: any[]=[];
  equiposEspecificosSwitchCaudal: any[]=[];
  equiposEspecificosSwitchPresion: any[]=[];
  equiposEspecificosMonitores: any[]=[];
  equiposEspecificosOtrosEquipos: any[]=[];





  constructor(
    private fb: FormBuilder,
    private _FirebaseService: FirebaseService,
    private _comunicacionService: ComunicacionService,
    private router: Router,
    private messageService: MessageService
  ) {


    this.intervencionForm = this.fb.group({
      nroIntervencion: ['', Validators.required],
      fechaAvisoIntervencion: ['', Validators.required],
      fechaFinIntervencion: ['', Validators.required],
      equipo1FallaIntervencion: ['', Validators.required],
      especificidadEquipo1FallaIntervencion: ['', Validators.required],
      estadoEquipo1FallaIntervencion: ['', Validators.required],
      distritoIntervencion: ['', Validators.required],
      estacionIntervencion: ['', Validators.required],
    });
  }
  // Método para actualizar el FormControl "nroIntervencion" cuando cambie en "app-nro-intervencion"
  updateNroIntervencionValue(value: any) {
    console.log(value);
    this.intervencionForm.get('nroIntervencion')?.setValue(value);
  }

  // Método para actualizar el FormControl "fechaAviso" cuando cambie en "app-fecha-aviso"
  updateFechaAvisoValue(value: any) {
    console.log(value);
    this.intervencionForm.get('fechaAvisoIntervencion')?.setValue(value);
  }

  updateFechaFinValue(value: any) {
    console.log(value);
    this.intervencionForm.get('fechaFinIntervencion')?.setValue(value);
  }

  updateDistritoIntervencionValue(value: any) {
    console.log(value);
    this.intervencionForm.get('distritoIntervencion')?.setValue(value);
  }

  updateEstacionIntervencionValue(event: any) {
    console.log(event.value.label);
    this.intervencionForm
      .get('estacionIntervencion')
      ?.setValue(event.value.label);
  }

  updateEquiposFallaValue(value: any) {
    console.log(value.label);
    this.intervencionForm
      .get('equipo1FallaIntervencion')
      ?.setValue(value.label);
  }
  updateEquipoEspecificoFallaValue(value: any) {
    console.log(value.label);
    this.intervencionForm
      .get('especificidadEquipo1FallaIntervencion')
      ?.setValue(value.label);
  }
  updateEquipoEstadoFallaValue(value: any) {
    console.log(value.label);
    this.intervencionForm
      .get('estadoEquipo1FallaIntervencion')
      ?.setValue(value.label);
  }

  onUpload(event: FileUploadEvent) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.messageService.add({severity: 'info', summary: 'Archivo cargado', detail: 'El archivo se almacenó correctamente'});
  }

  agregarIntervencion() {
    const INTERVENCION: Intervencion = {
      nroIntervencion: this.intervencionForm.value.nroIntervencion,
      fechaAvisoIntervencion:
        this.intervencionForm.value.fechaAvisoIntervencion,
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







    this.gastaron=false;
    ////
    this.ObtenerDatos();


  }



  AgregarDatosFirebase() {
    const DATOS: Datos = {

  estacionesRosarioPlanta: this.estacionesRosarioPlanta,
  estacionesRosarioVinculadasAgua: this.estacionesRosarioVinculadasAgua,
  estacionesRosarioVinculadasCloacales: this. estacionesRosarioVinculadasCloacales,
  estacionesBermudez: this.estacionesBermudez,
  estacionesCasilda: this.estacionesCasilda,
  estacionesFirmat: this.estacionesFirmat,
  estacionesCañada: this.estacionesCañada,
  estacionesFunes: this.estacionesFunes,
  estacionesBaigorria: this.estacionesBaigorria,
  estacionesAcoPlanta: this.estacionesAcoPlanta,
  estacionesAco: this.estacionesAco,
  estacionesRufino: this.estacionesRufino,
  estacionesSanLorenzo: this.estacionesSanLorenzo,
  estacionesGalvez: this.estacionesGalvez,
  estadoEquipos: this.estadoEquipos,
  HuboGastos: this.HuboGastos,
  PersonalATP: this.PersonalATP,
  detalleGastos: this.detalleGastos,
  equiposRetiradosOInstalados: this.equiposRetiradosOInstalados,
  distritos: this.distritos,

  equiposEspecificosProcesadores: this.equiposEspecificosProcesadores,
  equiposEspecificosModulosM340: this.equiposEspecificosModulosM340,
  equiposEspecificosModulosM221:this.equiposEspecificosModulosM221,
  equiposEspecificosModulosTwido:this. equiposEspecificosModulosTwido,
  equiposEspecificosModulosPremium: this.equiposEspecificosModulosPremium,
  equiposEspecificosModulosMicro: this.equiposEspecificosModulosMicro,
  equiposEspecificosComandoBomba: this.equiposEspecificosComandoBomba,
  equiposEspecificosVariadores: this.equiposEspecificosVariadores,
  equiposEspecificosRadios: this.equiposEspecificosRadios,
  equiposEspecificosArrancadores:this.equiposEspecificosArrancadores,
  equiposEnFalla: this.equiposEnFalla,
  personalGuardiaCasilda:this.personalGuardiaCasilda,
  JefePlantaCasilda:this.JefePlantaCasilda,
 JefeDistritoCasilda: this.JefeDistritoCasilda,
  personalGuardiaCañada:this.personalGuardiaCañada,
  JefePlantaCañada:this.JefePlantaCañada,
 JefeDistritoCañada: this.JefeDistritoCañada,
  personalGuardiaFirmat:this.personalGuardiaFirmat,
  JefePlantaFirmat:this.JefePlantaFirmat,
  JefeDistritoFirmat:this.JefeDistritoFirmat,
 personalGuardiaRufino: this.personalGuardiaRufino,
 JefePlantaRufino: this.JefePlantaRufino,
 JefeDistritoRufino: this.JefeDistritoRufino,
 personalGuardiaSanLorenzo: this.personalGuardiaSanLorenzo,
 JefePlantaSanLorenzo: this.JefePlantaSanLorenzo,
  JefeDistritoSanLorenzo:this.JefeDistritoSanLorenzo,
 personalGuardiaAco: this.personalGuardiaAco,
JefePlantaAco:  this.JefePlantaAco,
 JefeTransporteAco: this.JefeTransporteAco,
 JefeDistritoAco: this.JefeDistritoAco,
 JefeProduccionAco: this.JefeProduccionAco,
 personalGuardiaFunes: this.personalGuardiaFunes,
 JefePlantaFunes: this.JefePlantaFunes,
 JefeDistritoFunes: this.JefeDistritoFunes,
 personalGuardiaRosario: this.personalGuardiaRosario,
  CcrRosario:this.CcrRosario ,
  JefeTurnoRosario:this.JefeTurnoRosario,
 JefePlantaRosario: this.JefePlantaRosario,
  JefeDistritoRosario:this.JefeDistritoRosario,
  personalGuardiaGalvez:this.personalGuardiaGalvez,
  JefePlantaGalvez:this.JefePlantaGalvez,
  JefeDistritoGalvez:this.JefeDistritoGalvez,
  personalGuardiaBermudez:this.personalGuardiaBermudez,
  JefePlantaBermudez:this.JefePlantaBermudez,
  JefeDistritoBermudez:this.JefeDistritoBermudez,

  equiposEspecificosTransmisoresNivel: this.equiposEspecificosTransmisoresNivel,
  equiposEspecificosTransmisoresPresion: this.equiposEspecificosTransmisoresPresion,
  equiposEspecificosTransmisoresCaudal: this.equiposEspecificosTransmisoresCaudal,
  equiposEspecificosTransmisoresCloro:this.equiposEspecificosTransmisoresCloro,
  equiposEspecificosTransmisoresTemperatura: this. equiposEspecificosTransmisoresTemperatura,
  equiposEspecificosTransmisoresPh: this.equiposEspecificosTransmisoresPh,
  equiposEspecificosTransmisoresMovimiento: this.equiposEspecificosTransmisoresMovimiento,
  equiposEspecificosSensoresCaudal: this.equiposEspecificosSensoresCaudal,
  equiposEspecificosSensoresConductividad: this.equiposEspecificosSensoresConductividad,
  equiposEspecificosSensoresPh: this.equiposEspecificosSensoresPh,
  equiposEspecificosSensoresCloro:this.equiposEspecificosSensoresCloro,
  equiposEspecificosSensoresTemperatura: this.equiposEspecificosSensoresTemperatura,
  equiposEspecificosSensoresMovimiento: this.equiposEspecificosSensoresMovimiento,
  equiposEspecificosDisplay: this.equiposEspecificosDisplay,
  equiposEspecificosFuentes12V: this.equiposEspecificosFuentes12V,
  equiposEspecificosFuentes24V:this. equiposEspecificosFuentes24V,
  equiposEspecificosBoyas: this.equiposEspecificosBoyas,
  equiposEspecificosSwitchEthernet:this.equiposEspecificosSwitchEthernet,
  equiposEspecificosSwitchCaudal: this.equiposEspecificosSwitchCaudal,
  equiposEspecificosSwitchPresion: this. equiposEspecificosSwitchPresion,
  equiposEspecificosMonitores: this.equiposEspecificosMonitores,
  equiposEspecificosOtrosEquipos:this.equiposEspecificosOtrosEquipos



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
  capturaArray4(array4: any) {
    this.arrayfallas4 = array4;
  }

  capturaEstaciones(array1: any) {
    this.estaciones = array1;

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

  generoGastos(event:any){
    console.log(event.value.label)
    if(event.value.label=='Si'){
      console.log(event.value.label)
      this.gastaron=true;
    }else{
      this.gastaron=false;
    }
  }



  ObtenerDatos() {
    this._comunicacionService.recibirPersonalDistritos().subscribe((data)=>{
      this.personalDistritos=data;

    })
    this._FirebaseService.obtenerDatos().subscribe((data) => {

      this.listDatos = [];
      this.listDatos=data;
      this.distritos = data[0].distritos;
      this.estadoEquipos = data[0].estadoEquipos;
      this.PersonalATP = data[0].PersonalATP;
     this.equiposEnFalla=data[0].equiposEnFalla;
     this.HuboGastos=data[0].HuboGastos;


      this._comunicacionService.enviarDatos(data);





    });
  }
}
