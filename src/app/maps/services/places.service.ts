import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?:[number, number]; // defino que useLocation es de tipo opcional(?),
                                       //es decir puede que este como que no este...

 get isUserLocationReady():boolean{

  return !!this.useLocation;     //el doble signo (!!) es para devuelva true cuando tiene un
                                // valor definido. this.useLocation no devuelve un boolean,
                                //por lo tanto es necesario primero negarlo con un signo adelante,
                                //como para realizar una conversion a boolean, devoviendo un valor false,
                                //luego el segundo signo  de admiracion estaria diciendo que la variable
                                //tiene un valor definido, devolviendo true

 }
  constructor() {
    // apenas algun componente use el servicio PlacesService se ejecutará por unica vez
    this.getUserLocation().then((arg)=>console.log(arg));
  }

  // vamos a covertir en una promesa la parte del navigator.geolocation getcurrentposition
  //que trabaja en base a callbacks, para tener un mejor control al respecto. Para ello creamos
  // la funcion getUserLocation() que devuelve una Promesa.

  public async getUserLocation():Promise<[number, number]>{
    //
    return new Promise ((resolve, reject)=>{
      navigator.geolocation.getCurrentPosition(
        (args) =>{
          this.useLocation=[args.coords.latitude, args.coords.longitude];
          resolve(this.useLocation);
          console.log('dato ingresado')
        },(err)=>{
          alert('No se pudo obtener la geolocalización')
            console.log(err);
            reject();
        }
      )

  })
}
}
