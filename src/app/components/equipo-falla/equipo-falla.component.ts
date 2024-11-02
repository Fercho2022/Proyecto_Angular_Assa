import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-equipo-falla',
  templateUrl: './equipo-falla.component.html',
  styleUrls: ['./equipo-falla.component.css'],
})
export class EquipoFallaComponent {
  @Input() listDatos!: any[];
  @Input() rellenarCampo!: string;
  @Input() etiquetaLabel!: string;


  @Input() equiposEnFalla!: any[];
  @Output() arraynewItemEvent = new EventEmitter<any[]>();

  @Output() equipoFallaIntervencionChanged = new EventEmitter();
  @Output() limpiarDropdownChanged = new EventEmitter();



  arrayfallas1!: any[];
  estadoEquipos!: any[];

  constructor(
    private _comunicacionService:ComunicacionService
  ){

  }

  ngAfterViewInit(){


  }

  onEquipoFallaIntervencionChanged(value: any) {

    this.equipoFallaIntervencionChanged.emit(value);

  }



  seleccionEquiposGralFalla1(event: any) {
    this.onEquipoFallaIntervencionChanged(event.value);
    if (event.value !== undefined) {
      this.arrayfallas1 = [];
      this.estadoEquipos = this.listDatos[0].estadoEquipos;



      switch (event.value.label) {
        case 'Procesador':
          const equipoEspecifico1 = [
            { label: 'Procesadores' },
            { items: this.listDatos[0].equiposEspecificosProcesadores },
          ];

          this.arrayfallas1 = equipoEspecifico1;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;

        case 'Módulos M340':
          const equipoEspecifico2 = [
            { label: 'Módulos M340' },
            { items: this.listDatos[0].equiposEspecificosModulosM340 },
          ];

          this.arrayfallas1 = equipoEspecifico2;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;

        case 'Módulos M221':
          const equipoEspecifico3 = [
            { label: 'Módulos M221' },
            { items: this.listDatos[0].equiposEspecificosModulosM221 },
          ];

          this.arrayfallas1 = equipoEspecifico3;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;

        case 'Módulos Twido':
          const equipoEspecifico4 = [
            { label: 'Módulos Twido' },
            { items: this.listDatos[0].equiposEspecificosModulosTwido },
          ];

          this.arrayfallas1 = equipoEspecifico4;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;

        case 'Radios':
          const equipoEspecifico5 = [
            { label: 'Radios' },
            { items: this.listDatos[0].equiposEspecificosRadios },
          ];

          this.arrayfallas1 = equipoEspecifico5;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;

        case 'Comando Bomba 1':
          const equipoEspecifico6 = [
            { label: 'Comando Bomba 1' },
            { items: this.listDatos[0].equiposEspecificosComandoBomba },
          ];

          this.arrayfallas1 = equipoEspecifico6;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;

        case 'Comando Bomba 2':
          const equipoEspecifico7 = [
            { label: 'Comando Bomba 2' },
            { items: this.listDatos[0].equiposEspecificosComandoBomba },
          ];

          this.arrayfallas1 = equipoEspecifico7;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;
        case 'Comando Bomba 3':
          const equipoEspecifico8 = [
            { label: 'Comando Bomba 3' },
            { items: this.listDatos[0].equiposEspecificosComandoBomba },
          ];

          this.arrayfallas1 = equipoEspecifico8;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;
        case 'Comando Bomba 4':
          const equipoEspecifico9 = [
            { label: 'Comando Bomba 4' },
            { items: this.listDatos[0].equiposEspecificosComandoBomba },
          ];

          this.arrayfallas1 = equipoEspecifico9;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;

        case 'Variador BBa1':
          const equipoEspecifico10 = [
            { label: 'Variadores' },
            { items: this.listDatos[0].equiposEspecificosVariadores },
          ];

          this.arrayfallas1 = equipoEspecifico10;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;

        case 'Variador BBa2':
          const equipoEspecifico11 = [
            { label: 'Variadores' },
            { items: this.listDatos[0].equiposEspecificosVariadores },
          ];

          this.arrayfallas1 = equipoEspecifico11;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;
        case 'Variador BBa3':
          const equipoEspecifico12 = [
            { label: 'Variadores' },
            { items: this.listDatos[0].equiposEspecificosVariadores },
          ];

          this.arrayfallas1 = equipoEspecifico12;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;
        case 'Variador BBa4':
          const equipoEspecifico13 = [
            { label: 'Variadores' },
            { items: this.listDatos[0].equiposEspecificosVariadores },
          ];

          this.arrayfallas1 = equipoEspecifico13;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;

        case 'Arrancador BBa1':
          const equipoEspecifico14 = [
            { label: 'Arrancadores' },
            { items: this.listDatos[0].equiposEspecificosArrancadores },
          ];

          this.arrayfallas1 = equipoEspecifico14;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;
        case 'Arrancador BBa2':
          const equipoEspecifico15 = [
            { label: 'Arrancadores' },
            { items: this.listDatos[0].equiposEspecificosArrancadores },
          ];

          this.arrayfallas1 = equipoEspecifico15;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;
        case 'Arrancador BBa3':
          const equipoEspecifico16 = [
            { label: 'Arrancadores' },
            { items: this.listDatos[0].equiposEspecificosArrancadores },
          ];

          this.arrayfallas1 = equipoEspecifico16;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;
        case 'Arrancador BBa4':
          const equipoEspecifico17 = [
            { label: 'Arrancadores' },
            { items: this.listDatos[0].equiposEspecificosArrancadores },
          ];

          this.arrayfallas1 = equipoEspecifico17;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;
        case 'Transmisor de nivel':
          const equipoEspecifico18 = [
            { label: 'Transmisores' },
            { items: this.listDatos[0].equiposEspecificosTransmisoresNivel },
          ];

          this.arrayfallas1 = equipoEspecifico18;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;
        case 'Transmisor de presion':
          const equipoEspecifico19 = [
            { label: 'Transmisores' },
            { items: this.listDatos[0].equiposEspecificosTransmisoresPresion },
          ];

          this.arrayfallas1 = equipoEspecifico19;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;

        case 'Transmisor de caudal':
          const equipoEspecifico20 = [
            { label: 'Transmisores' },
            { items: this.listDatos[0].equiposEspecificosTransmisoresCaudal },
          ];

          this.arrayfallas1 = equipoEspecifico20;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;
        case 'Transmisor de pH':
          const equipoEspecifico21 = [
            { label: 'Transmisores' },
            { items: this.listDatos[0].equiposEspecificosTransmisoresPh },
          ];

          this.arrayfallas1 = equipoEspecifico21;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;
        case 'Transmisor de conductividad':
          const equipoEspecifico22 = [
            { label: 'Transmisores' },
            {
              items:
                this.listDatos[0].equiposEspecificosTransmisoresConductividad,
            },
          ];

          this.arrayfallas1 = equipoEspecifico22;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;
        case 'Transmisor de cloro':
          const equipoEspecifico23 = [
            { label: 'Transmisores' },
            { items: this.listDatos[0].equiposEspecificosTransmisoresCloro },
          ];

          this.arrayfallas1 = equipoEspecifico23;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;
        case 'Transmisor de temperatura':
          const equipoEspecifico24 = [
            { label: 'Transmisores' },
            {
              items:
                this.listDatos[0].equiposEspecificosTransmisoresTemperatura,
            },
          ];

          this.arrayfallas1 = equipoEspecifico24;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;
        case 'Transmisor de movimiento':
          const equipoEspecifico25 = [
            { label: 'Transmisores' },
            {
              items: this.listDatos[0].equiposEspecificosTransmisoresMovimiento,
            },
          ];

          this.arrayfallas1 = equipoEspecifico25;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;

        case 'Sensor de caudal':
          const equipoEspecifico26 = [
            { label: 'Sensores' },
            { items: this.listDatos[0].equiposEspecificosSensoresCaudal },
          ];

          this.arrayfallas1 = equipoEspecifico26;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;
        case 'Sensores de pH':
          const equipoEspecifico27 = [
            { label: 'Sensores' },
            { items: this.listDatos[0].equiposEspecificosSensoresPh },
          ];

          this.arrayfallas1 = equipoEspecifico27;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;
        case 'Transmisor de conductividad':
          const equipoEspecifico28 = [
            { label: 'Sensores' },
            {
              items: this.listDatos[0].equiposEspecificosSensoresConductividad,
            },
          ];

          this.arrayfallas1 = equipoEspecifico28;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;
        case 'Sensor de cloro':
          const equipoEspecifico29 = [
            { label: 'Sensores' },
            { items: this.listDatos[0].equiposEspecificosSensoresCloro },
          ];

          this.arrayfallas1 = equipoEspecifico29;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;
        case 'Sensor de temperatura':
          const equipoEspecifico30 = [
            { label: 'Transmisores' },
            { items: this.listDatos[0].equiposEspecificosSensoresTemperatura },
          ];

          this.arrayfallas1 = equipoEspecifico30;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;
        case 'Sensor de movimiento':
          const equipoEspecifico31 = [
            { label: 'Sensores' },
            { items: this.listDatos[0].equiposEspecificosSensoresMovimiento },
          ];

          this.arrayfallas1 = equipoEspecifico31;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;
          case 'Switch presion-Presostato':
            const equipoEspecifico32 = [
              { label: 'Switchs' },
              { items: this.listDatos[0].equiposEspecificosSwitchPresion },
            ];

            this.arrayfallas1 = equipoEspecifico32;

            this.arraynewItemEvent.emit(this.arrayfallas1);
            return;

          case 'Switch caudal-Flujostato':
            const equipoEspecifico33 = [
              { label: 'Switchs' },
              { items: this.listDatos[0].equiposEspecificosSwitchCaudal },
            ];

            this.arrayfallas1 = equipoEspecifico33;

            this.arraynewItemEvent.emit(this.arrayfallas1);
            return;
            case 'Hub-Switch Ethernet':
              const equipoEspecifico34 = [
                { label: 'Switch ethernet' },
                { items: this.listDatos[0].equiposEspecificosSwitchEthernet },
              ];

              this.arrayfallas1 = equipoEspecifico34;

              this.arraynewItemEvent.emit(this.arrayfallas1);
              return;
        case 'Fuente de tensión 24V':
          const equipoEspecifico35 = [
            { label: 'Fuentes 24V' },
            { items: this.listDatos[0].equiposEspecificosFuentes24V },
          ];

          this.arrayfallas1 = equipoEspecifico35;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;
        case 'Fuente de tensión 12V':
          const equipoEspecifico36 = [
            { label: 'Fuentes 12V' },
            { items: this.listDatos[0].equiposEspecificosFuentes12V },
          ];

          this.arrayfallas1 = equipoEspecifico36;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;

        case 'Boya de alta':
          const equipoEspecifico37 = [
            { label: 'Boyas' },
            { items: this.listDatos[0].equiposEspecificosBoyas },
          ];

          this.arrayfallas1 = equipoEspecifico37;

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;

          case 'Boya de baja':
            const equipoEspecifico38 = [
              { label: 'Boyas' },
              { items: this.listDatos[0].equiposEspecificosBoyas },
            ];

            this.arrayfallas1 = equipoEspecifico38;

            this.arraynewItemEvent.emit(this.arrayfallas1);
            return;

            case 'Boya de muy alta':
              const equipoEspecifico39 = [
                { label: 'Boyas' },
                { items: this.listDatos[0].equiposEspecificosBoyas },
              ];

              this.arrayfallas1 = equipoEspecifico39;

              this.arraynewItemEvent.emit(this.arrayfallas1);
              return;
              case 'Boya de muy baja':
                const equipoEspecifico40 = [
                  { label: 'Boyas' },
                  { items: this.listDatos[0].equiposEspecificosBoyas },
                ];

                this.arrayfallas1 = equipoEspecifico40;

                this.arraynewItemEvent.emit(this.arrayfallas1);
                return;

                case 'Monitor de tensión':
                const equipoEspecifico41 = [
                  { label: 'Monitores' },
                  { items: this.listDatos[0].equiposEspecificosMonitores },
                ];

                this.arrayfallas1 = equipoEspecifico41;

                this.arraynewItemEvent.emit(this.arrayfallas1);
                return;
                case 'Monitor de fase':
                  const equipoEspecifico42 = [
                    { label: 'Monitores' },
                    { items: this.listDatos[0].equiposEspecificosMonitores },
                  ];

                  this.arrayfallas1 = equipoEspecifico42;

                  this.arraynewItemEvent.emit(this.arrayfallas1);
                  return;
                  case 'Monitor de tensión y fase':
                    const equipoEspecifico43 = [
                      { label: 'Monitores' },
                      { items: this.listDatos[0].equiposEspecificosMonitores },
                    ];

                    this.arrayfallas1 = equipoEspecifico43;

                    this.arraynewItemEvent.emit(this.arrayfallas1);
                    return;
                    case 'Otro equipo':
                      const equipoEspecifico44 = [
                        { label: 'Otros equipos' },
                        { items: this.listDatos[0].equiposEspecificosOtrosEquipos },
                      ];

                      this.arrayfallas1 = equipoEspecifico44;

                      this.arraynewItemEvent.emit(this.arrayfallas1);
                      return;


        default:
          return;
      }
    }
  }




}
