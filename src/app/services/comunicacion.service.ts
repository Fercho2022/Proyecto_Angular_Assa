import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  private datos$ =new BehaviorSubject<any>({});
private estaciones$=new BehaviorSubject<any>({});
  constructor() { }

  enviarDatos(datos:any){
    this.datos$.next(datos);


  }

  recibirDatos():Observable<any>{
    return this.datos$.asObservable();

  }

  enviarEstaciones(estaciones:any){
    this.estaciones$.next(estaciones);

  }

  recibirEstaciones():Observable<any>{
    return this.estaciones$.asObservable();
  }

}
