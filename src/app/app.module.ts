import { EquipoRetiradoInstaladoComponent } from './components/equipo-retirado-instalado/equipo-retirado-instalado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { MensajesComponent } from './components/shared/mensajes/mensajes/mensajes.component';
import { PrimengModule } from './components/shared/primeng/primeng.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { IntervencionComponent } from './components/intervencion/intervencion.component';
import { AgregarCampoComponent } from './components/agregar-campo/agregar-campo.component';





import { AgregarComponent } from './components/agregar/agregar.component';
import { AgregarEstacionComponent } from './components/agregar-estacion/agregar-estacion.component';
import { EquipoFallaComponent } from './components/equipo-falla/equipo-falla.component';
import { EstadoEquipoComponent } from './components/estado-equipo/estado-equipo.component';
import { CamposMultiplesComponent } from './components/campos-multiples/campos-multiples.component';
import { EquiposEspecificoFallaComponent } from './components/equipos-especifico-falla/equipos-especifico-falla.component';
import { DistritoFallaComponent } from './components/distrito-falla/distrito-falla.component';
import { EstacionFallaComponent } from './components/estacion-falla/estacion-falla.component';
import { NroIntervencionComponent } from './components/nro-intervencion/nro-intervencion.component';
import { FechaAvisoComponent } from './components/fecha-aviso/fecha-aviso.component';
import { FechaFinIntervencionComponent } from './components/fecha-fin-intervencion/fecha-fin-intervencion.component';
import { AvisoFallaAssaComponent } from './components/aviso-falla-assa/aviso-falla-assa.component';
import { RecepcionAvisoATPComponent } from './components/recepcion-aviso-atp/recepcion-aviso-atp.component';
import { PersonalATPAsistioComponent } from './components/personal-atp-asistio/personal-atp-asistio.component';
import { ImputSerieComponent } from './components/imput-serie/imput-serie.component';
import { AgregarEquiposFallanComponent } from './components/agregar-equipos-fallan/agregar-equipos-fallan.component';
import { ListarComponent } from './components/listar/listar.component';
import { MapsModule } from './maps/maps.module';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RecuperarPasswordComponent,
    RegistrarUsuarioComponent,
    VerificarCorreoComponent,
    MensajesComponent,
    DashboardComponent,
    SpinnerComponent,
    IntervencionComponent,
    AgregarCampoComponent,


    AgregarComponent,
    AgregarEstacionComponent,
    EquipoFallaComponent,
    EstadoEquipoComponent,
    CamposMultiplesComponent,
    EquiposEspecificoFallaComponent,
    DistritoFallaComponent,
    EstacionFallaComponent,
    NroIntervencionComponent,
    FechaAvisoComponent,
    FechaFinIntervencionComponent,
    AvisoFallaAssaComponent,
    RecepcionAvisoATPComponent,
    PersonalATPAsistioComponent,
    ImputSerieComponent,
    EquipoRetiradoInstaladoComponent,
    AgregarEquiposFallanComponent,
    ListarComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PrimengModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
BrowserAnimationsModule,
    FormsModule,
    MapsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
