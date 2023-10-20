import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-distrito-falla',
  templateUrl: './distrito-falla.component.html',
  styleUrls: ['./distrito-falla.component.css']
})
export class DistritoFallaComponent {
  @Input() distritos!:any[];
  @Input() listDatos!:any[];
  @Input() rellenarCampo1!:string;
  @Input()  etiquetaLabel!:string;
  @Output() arraynewItenEvent1=new EventEmitter<any[]>();
  @Output() arraynewItemEvent3=new EventEmitter<any>();
  @Output() selectDistritoItemEvent=new EventEmitter<string>();


  array!:any[];
  PersonalATP!:any[];
  equiposEnFalla!:any[];
  personalDistritos!:any[];
  estaciones!:any[];
  arrayPersonalDistritos!:any[];
  selecDistrito!:string;


arrayListPersonalDistritos(){
console.log(120)
  this.arraynewItemEvent3.emit(this.personalDistritos);
console.log(this.personalDistritos)
}

  arrayListEstaciones(){
console.log(300)
this.arraynewItenEvent1.emit(this.estaciones)
  }

  seleccionFiltroDistrito(event: any) {
    if (event.value.label !== undefined) {
this.selecDistrito=event.value.label;
      this.estaciones = [];
      this.personalDistritos = [];

      this.array = this.listDatos[0].estaciones;
      console.log(event.value.label)
      this.arrayPersonalDistritos = this.listDatos[0].personalDistritos;


      switch (event.value.label) {

        case 'Rosario':
          this.array.forEach((elements: any) => {
            if (
              elements.label == 'Planta Potabilizadora Rosario' ||
              elements.label == 'Vinculadas Elevadoras cloacales' ||
              elements.label == 'Vinculadas Agua'
            ) {
              this.estaciones.push(elements);
            }
          });

          this.arrayPersonalDistritos.forEach((elements: any) => {

            if (elements.label == 'Rosario') {
              elements.items.forEach((item:any)=>{
                this.personalDistritos.push(item);
              })

            }

          });
          this.arrayListEstaciones();

          console.log(this.personalDistritos)
          console.log(100)
          this.arrayListPersonalDistritos();

          return;
        case 'Capitan Bermudez':
          this.array.forEach((elements: any) => {
            if (elements.label == 'Capitan Bermudez') {
              this.estaciones.push(elements);
            }
          });

          this.arrayPersonalDistritos.forEach((elements: any) => {

            if (elements.label == 'Capitán Bermudez') {
              elements.items.forEach((item:any)=>{
                this.personalDistritos.push(item);
              })

            }

          });
          console.log(100)
          console.log(this.personalDistritos)
          this.arrayListEstaciones();
          this.arrayListPersonalDistritos();

          return;

        case 'Casilda':
          this.array.forEach((elements: any) => {
            if (elements.label == 'Casilda') {
              this.estaciones.push(elements);
            }
          });

          this.arrayPersonalDistritos.forEach((elements: any) => {

            if (elements.label == 'Casilda') {
              elements.items.forEach((item:any)=>{

                  this.personalDistritos.push(item.items);


              })
            }

          });
          console.log(100)
          console.log(this.personalDistritos)
          this.arrayListEstaciones();
          this.arrayListPersonalDistritos();

          return;
        case 'Firmat':
          this.array.forEach((elements: any) => {
            if (elements.label == 'Firmat') {
              this.estaciones.push(elements);
            }
          });

          this.arrayPersonalDistritos.forEach((elements: any) => {

            if (elements.label == 'Firmat') {
              this.personalDistritos.push(elements.items[0].items);
            }

          });
          console.log(this.personalDistritos)
          this.arrayListEstaciones();
          this.arrayListPersonalDistritos();

          return;
        case 'Cañada de Gomez':
          this.array.forEach((elements: any) => {
            if (elements.label == 'Cañada de Gomez') {
              this.estaciones.push(elements);
            }
          });

          this.arrayPersonalDistritos.forEach((elements: any) => {

            if (elements.label == 'Cañada de Gomez') {
              this.personalDistritos.push(elements.items[0].items);
            }

          });
          console.log(this.personalDistritos)
          this.arrayListEstaciones();
          this.arrayListPersonalDistritos();
          return;
        case 'Funes':
          this.array.forEach((elements: any) => {
            if (elements.label == 'Funes') {
              this.estaciones.push(elements);
            }
          });

          this.arrayPersonalDistritos.forEach((elements: any) => {

            if (elements.label == 'Funes') {
              this.personalDistritos.push(elements.items[0].items);
            }

          });
          console.log(this.personalDistritos)
          this.arrayListEstaciones();
          this.arrayListPersonalDistritos();
          return;
        case 'Granadero Baigorria':
          this.array.forEach((elements: any) => {
            if (elements.label == 'Granadero Baigorria') {
              this.estaciones.push(elements);
            }
          });

          this.arrayPersonalDistritos.forEach((elements: any) => {

            if (elements.label == 'Granadero Baigorria') {
              this.personalDistritos.push(elements.items[0].items);
            }

          });
          console.log(this.personalDistritos)
          this.arrayListEstaciones();
          this.arrayListPersonalDistritos();

          return;
        case 'Monje Acueducto':
          this.array.forEach((elements: any) => {
            if (elements.label == 'Monje Acueducto') {
              this.estaciones.push(elements);
            }
          });

          this.arrayPersonalDistritos.forEach((elements: any) => {

            if (elements.label == 'Acueducto Centro Oeste') {
              this.personalDistritos.push(elements.items[0].items);
            }

          });
          console.log(this.personalDistritos)
          this.arrayListEstaciones();
          this.arrayListPersonalDistritos();
          return;
        case 'Rufino':
          this.array.forEach((elements: any) => {
            if (elements.label == 'Rufino') {
              this.estaciones.push(elements);
            }
          });

          this.arrayPersonalDistritos.forEach((elements: any) => {

            if (elements.label == 'Rufino') {
              this.personalDistritos.push(elements.items[0].items);
            }

          });
          console.log(this.personalDistritos)
          this.arrayListEstaciones();
          this.arrayListPersonalDistritos();
          return;
        case 'San Lorenzo':
          this.array.forEach((elements: any) => {
            if (elements.label == 'San Lorenzo') {
              this.estaciones.push(elements);
            }
          });

          this.arrayPersonalDistritos.forEach((elements: any) => {

            if (elements.label == 'San Lorenzo') {
              this.personalDistritos.push(elements.items[0].items);
            }

          });
          console.log(this.personalDistritos)
          this.arrayListEstaciones();
          this.arrayListPersonalDistritos();
          return;
        case 'Villa Gdor. Galvez':
          this.array.forEach((elements: any) => {
            if (elements.label == 'Villa Gdor. Galvez') {
              this.estaciones.push(elements);
            }
          });

          this.arrayPersonalDistritos.forEach((elements: any) => {

            if (elements.label == 'Villa Gdor. Galvez') {
             const array2= elements.items[0].items
              this.personalDistritos.push(elements.items[0].items);
            }

          });
          console.log(this.personalDistritos)
          this.arrayListEstaciones();
          this.arrayListPersonalDistritos();
          return;
        default:
          return;
      }
    }
  }


}
