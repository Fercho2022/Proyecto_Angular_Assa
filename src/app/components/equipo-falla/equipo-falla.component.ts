import { Component, EventEmitter, Input, Output } from '@angular/core';


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

  arrayfallas1!: any[];
  estadoEquipos!: any[];



  seleccionEquiposGralFalla1(event: any) {
    if (event.value !== undefined) {
      this.arrayfallas1 = [];
      this.estadoEquipos = this.listDatos[0].estadoEquipos;
      console.log(this.estadoEquipos);

      switch (event.value.label) {
        case 'Procesador M340':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Procesador M340') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }
          });

          this.arraynewItemEvent.emit(this.arrayfallas1);
          return;

        case 'Procesador M580':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Procesador M580') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Procesador M221':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Procesador M221') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Procesador Twido':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Procesador Twido') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Procesador Nano':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Procesador Nano') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Módulos M340':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Módulos M340') {
              elements.items.forEach((element: any) => {
                if (
                  element.label == 'AI M340' ||
                  element.label == 'AO M340' ||
                  element.label == 'DI M340' ||
                  element.label == 'DO M340'
                ) {
                  this.arrayfallas1.push(element);
                }
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Módulos M221':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Módulos M221') {
              elements.items.forEach((element: any) => {
                if (
                  element.label == 'AI M221' ||
                  element.label == 'AO M221' ||
                  element.label == 'DI M221' ||
                  element.label == 'DO M221'
                ) {
                  this.arrayfallas1.push(element);
                }
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Módulos Twido':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Módulos Twido') {
              elements.items.forEach((element: any) => {
                if (
                  element.label == 'AI Twido' ||
                  element.label == 'AO Twido' ||
                  element.label == 'DI Twido' ||
                  element.label == 'DO Twido'
                ) {
                  this.arrayfallas1.push(element);
                }
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Comando Bomba 1':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Comando Bomba 1') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Comando Bomba 2':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Comando Bomba 2') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Comando Bomba 3':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Comando Bomba 3') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Comando Bomba 4':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Comando Bomba 4') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Variador BBa1':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Variador BBa1') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Variador BBa2':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Variador BBa2') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Variador BBa3':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Variador BBa3') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Variador BBa4':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Variador BBa4') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Arrancador BBa1':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Arrancador BBa1') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Arrancador BBa2':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Arrancador BBa2') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Arrancador BBa3':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Arrancador BBa3') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Arrancador BBa4':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Arrancador BBa4') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Radios':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Radios') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Fuente de tensión 24V':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Fuente de tensión 24V') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Fuente de tensión 12V':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Fuente de tensión 12V') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Procesador Premium':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Procesador Premium') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Procesador Micro':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Procesador Micro') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Transmisor de nivel':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Transmisor de nivel') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Transmisor de caudal':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Transmisor de caudal') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Transmisor de presión':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Transmisor de presión') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Transmisor de ph':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Transmisor de ph') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Transmisor de conductividad':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Transmisor de conductividad') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Display':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Display') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Boya de alta':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Boya de alta') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Boya de baja':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Boya de baja') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Boya de muy alta':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Boya de muy alta') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;
        case 'Boya de muy baja':
          this.listDatos[0].equiposEspecificosFalla.forEach((elements: any) => {
            if (elements.label == 'Boya de muy baja') {
              elements.items.forEach((element: any) => {
                this.arrayfallas1.push(element);
              });
            }

            this.arraynewItemEvent.emit(this.arrayfallas1);
          });
          return;

        default:
          return;
      }
    }
  }
}
