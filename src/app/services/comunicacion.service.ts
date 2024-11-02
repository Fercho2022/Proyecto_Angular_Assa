import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

private datos$ =new BehaviorSubject<any>({});
private estaciones$=new BehaviorSubject<any>({});
private personalDistritos$=new BehaviorSubject<any>({});
private clean$=new BehaviorSubject<any>({});
private habilitaAgregarDistrito$=new BehaviorSubject<any>({});
private habilitaEditarDistrito$=new BehaviorSubject<any>({});
private habilitaAgregarEquipo$=new BehaviorSubject<any>({});

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

  enviarPersonalDistritos(personal:any){
    this.personalDistritos$.next(personal);

  }

  recibirPersonalDistritos():Observable<any>{
    return this.personalDistritos$.asObservable();
  }

  enviarHabilitarAgregarDistrito(habilita:boolean){
    this.habilitaAgregarDistrito$.next(habilita);
  }

  recibirHabilitaAgregarDistrito():Observable<any>{
    return this.habilitaAgregarDistrito$.asObservable();
  }

  enviarHabilitarAgregarEquipo(habilita:boolean){
    this.habilitaAgregarEquipo$.next(habilita);
  }

  recibirHabilitaAgregarEquipo():Observable<any>{
    return this.habilitaAgregarEquipo$.asObservable();
  }

  enviarHabilitarEditarDistrito(ObjetoDistrito:any){
    this.habilitaEditarDistrito$.next(ObjetoDistrito);
  }

  recibirHabilitaEditarDistrito():Observable<any>{
    return this.habilitaEditarDistrito$.asObservable();
  }


}
