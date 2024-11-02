import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-distrito-falla',
  templateUrl: './distrito-falla.component.html',
  styleUrls: ['./distrito-falla.component.css'],
})
export class DistritoFallaComponent {
  @Input() distritos!: any[];
  @Input() listDatos!: any[];
  @Input() rellenarCampo1!: string;
  @Input() etiquetaLabel!: string;

  @Output() arraynewItenEvent1 = new EventEmitter<any[]>();

  @Output() selectDistritoItemEvent = new EventEmitter<string>();
  @Output() distritoIntervencionChanged = new EventEmitter();

  array!: any[];
  PersonalATP!: any[];
  equiposEnFalla!: any[];
  personalDistritos!: any[];
  estaciones!: any[];
  arrayPersonalDistritos!: any[];


  constructor(private _comunicacionService: ComunicacionService) {


  }


  // Variable para realizar un seguimiento del envío del formulario

  onDistritoIntervencionChanged(value: any) {
    this.distritoIntervencionChanged.emit(value);
  }

  arrayListPersonalDistritos() {
    this._comunicacionService.enviarPersonalDistritos(this.personalDistritos);
  }

  arrayListEstaciones() {
    this.arraynewItenEvent1.emit(this.estaciones);
  }

  seleccionFiltroDistrito(event: any) {
    this.onDistritoIntervencionChanged(event.value.label);

    if (event.value.label !== undefined) {
      this.estaciones = [];
      this.personalDistritos = [];

      switch (event.value.label) {
        case 'Rosario':
          const array1 = [
            {
              label: 'Planta Potabilizadora Rosario',
              items: this.listDatos[0].estacionesRosarioPlanta,
            },
            {
              label: 'Vinculadas Agua',
              items: this.listDatos[0].estacionesRosarioVinculadasAgua,
            },
            {
              label: 'Vinculadas Elevadoras cloacales',
              items: this.listDatos[0].estacionesRosarioVinculadasCloacales,
            },
          ];
          this.estaciones = array1;

          this.arrayListEstaciones();

          const arrayA = [
            {
              label: 'Guardia electromecánica',
              items: this.listDatos[0].personalGuardiaRosario,
            },
            {
              label: 'Jefe de Planta',
              items: this.listDatos[0].JefePlantaRosario,
            },
            {
              label: 'Jefe de Distrito',
              items: this.listDatos[0].JefeDistritoRosario,
            },
            {
              label: 'Jefe de Turno',
              items: this.listDatos[0].JefeTurnoRosario,
            },
            {
              label: 'Ccr',
              items: this.listDatos[0].CcrRosario,
            },
          ];
          this.personalDistritos = arrayA;

          this.arrayListPersonalDistritos();

          return;
        case 'Capitan Bermudez':
          const array2 = [
            {
              label: 'Capitan Bermudez',
              items: this.listDatos[0].estacionesBermudez,
            },
          ];
          this.estaciones = array2;
          this.arrayListEstaciones();

          const arrayB = [
            {
              label: 'Guardia electromecánica',
              items: this.listDatos[0].personalGuardiaBermudez,
            },
            {
              label: 'Jefe de Planta',
              items: this.listDatos[0].JefePlantaBermudez,
            },
            {
              label: 'Jefe de Distrito',
              items: this.listDatos[0].JefeDistritoBermudez,
            },
          ];
          this.personalDistritos = arrayB;

          this.arrayListPersonalDistritos();

          return;

        case 'Casilda':
          const array3 = [
            {
              label: 'Casilda',
              items: this.listDatos[0].estacionesCasilda,
            },
          ];
          this.estaciones = array3;

          this.arrayListEstaciones();
          const arrayC = [
            {
              label: 'Guardia electromecánica',
              items: this.listDatos[0].personalGuardiaCasilda,
            },
            {
              label: 'Jefe de Planta',
              items: this.listDatos[0].JefePlantaCasilda,
            },
            {
              label: 'Jefe de Distrito',
              items: this.listDatos[0].JefeDistritoCasilda,
            },
          ];
          this.personalDistritos = arrayC;

          this.arrayListPersonalDistritos();

          return;
        case 'Firmat':
          const array4 = [
            {
              label: 'Firmat',
              items: this.listDatos[0].estacionesFirmat,
            },
          ];
          this.estaciones = array4;

          this.arrayListEstaciones();
          const arrayD = [
            {
              label: 'Guardia electromecánica',
              items: this.listDatos[0].personalGuardiaFirmat,
            },
            {
              label: 'Jefe de Planta',
              items: this.listDatos[0].JefePlantaFirmat,
            },
            {
              label: 'Jefe de Distrito',
              items: this.listDatos[0].JefeDistritoFirmat,
            },
          ];
          this.personalDistritos = arrayD;
          this.arrayListPersonalDistritos();

          return;
        case 'Cañada de Gomez':
          const array5 = [
            {
              label: 'Cañada de Gomez',
              items: this.listDatos[0].estacionesCañada,
            },
          ];
          this.estaciones = array5;

          this.arrayListEstaciones();
          const arrayE = [
            {
              label: 'Guardia electromecánica',
              items: this.listDatos[0].personalGuardiaCañada,
            },
            {
              label: 'Jefe de Planta',
              items: this.listDatos[0].JefePlantaCasilda,
            },
            {
              label: 'Jefe de Distrito',
              items: this.listDatos[0].JefeDistritoCañada,
            },
          ];
          this.personalDistritos = arrayE;
          this.arrayListPersonalDistritos();
          return;
        case 'Funes':
          const array6 = [
            {
              label: 'Funes',
              items: this.listDatos[0].estacionesFunes,
            },
          ];
          this.estaciones = array6;

          this.arrayListEstaciones();
          const arrayF = [
            {
              label: 'Guardia electromecánica',
              items: this.listDatos[0].personalGuardiaFunes,
            },
            {
              label: 'Jefe de Planta',
              items: this.listDatos[0].JefePlantaFunes,
            },
            {
              label: 'Jefe de Distrito',
              items: this.listDatos[0].JefeDistritoFunes,
            },
          ];
          this.personalDistritos = arrayF;
          this.arrayListPersonalDistritos();
          return;
        case 'Granadero Baigorria':
          const array7 = [
            {
              label: 'Granadero Baigorria',
              items: this.listDatos[0].estacionesBaigorria,
            },
          ];
          this.estaciones = array7;

          this.arrayListEstaciones();
          const arrayG = [
            {
              label: 'Guardia electromecánica',
              items: this.listDatos[0].personalGuardiaBaigorria,
            },
            {
              label: 'Jefe de Planta',
              items: this.listDatos[0].JefePlantaBaigorria,
            },
            {
              label: 'Jefe de Distrito',
              items: this.listDatos[0].JefeDistritoBaigorria,
            },
          ];
          this.personalDistritos = arrayG;
          this.arrayListPersonalDistritos();

          return;
        case 'Monje Acueducto':
          const array8 = [
            {
              label: 'Estaciones Acueducto',
              items: this.listDatos[0].estacionesAco,
            },
            {
              label: 'Planta Acueducto',
              items: this.listDatos[0].estacionesAcoPlanta,
            },
          ];
          this.estaciones = array8;

          this.arrayListEstaciones();

          const arrayH = [
            {
              label: 'Guardia electromecánica',
              items: this.listDatos[0].personalGuardiaAco,
            },
            {
              label: 'Jefe de Planta',
              items: this.listDatos[0].JefePlantaAco,
            },
            {
              label: 'Jefe de Distrito',
              items: this.listDatos[0].JefeDistritoAco,
            },
            {
              label: 'Jefe de Transporte',
              items: this.listDatos[0].JefeTransporteAco,
            },
            {
              label: 'Jefe de Transporte',
              items: this.listDatos[0].JefeProduccionAco,
            },
          ];
          this.personalDistritos = arrayH;
          this.arrayListPersonalDistritos();
          return;
        case 'Rufino':
          const array9 = [
            {
              label: 'Rufino',
              items: this.listDatos[0].estacionesRufino,
            },
          ];
          this.estaciones = array9;
          this.arrayListEstaciones();
          const arrayI = [
            {
              label: 'Guardia electromecánica',
              items: this.listDatos[0].personalGuardiaRufino,
            },
            {
              label: 'Jefe de Planta',
              items: this.listDatos[0].JefePlantaRufino,
            },
            {
              label: 'Jefe de Distrito',
              items: this.listDatos[0].JefeDistritoRufino,
            },
          ];
          this.personalDistritos = arrayI;

          this.arrayListPersonalDistritos();
          return;
        case 'San Lorenzo':
          const array10 = [
            {
              label: 'San Lorenzo',
              items: this.listDatos[0].estacionesSanLorenzo,
            },
          ];
          this.estaciones = array10;

          this.arrayListEstaciones();
          const arrayJ = [
            {
              label: 'Guardia electromecánica',
              items: this.listDatos[0].personalGuardiaSanLorenzo,
            },
            {
              label: 'Jefe de Planta',
              items: this.listDatos[0].JefePlantaSanLorenzo,
            },
            {
              label: 'Jefe de Distrito',
              items: this.listDatos[0].JefeDistritoSanLorenzo,
            },
          ];
          this.personalDistritos = arrayJ;
          this.arrayListPersonalDistritos();
          return;
        case 'Villa Gdor. Galvez':
          const array11 = [
            {
              label: 'Villa Gdor Galvez',
              items: this.listDatos[0].estacionesGalvez,
            },
          ];
          this.estaciones = array11;

          this.arrayListEstaciones();
          const arrayK = [
            {
              label: 'Guardia electromecánica',
              items: this.listDatos[0].personalGuardiaGalvez,
            },
            {
              label: 'Jefe de Planta',
              items: this.listDatos[0].JefePlantaGalvez,
            },
            {
              label: 'Jefe de Distrito',
              items: this.listDatos[0].JefeDistritoGalvez,
            },
          ];
          this.personalDistritos = arrayK;
          this.arrayListPersonalDistritos();
          return;
        default:
          return;
      }
    }
  }
}
