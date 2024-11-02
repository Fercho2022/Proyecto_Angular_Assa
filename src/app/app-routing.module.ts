import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { IntervencionComponent } from './components/intervencion/intervencion.component';
import { AgregarCampoComponent } from './components/agregar-campo/agregar-campo.component';
import { AgregarComponent } from './components/agregar/agregar.component';

const routes: Routes = [
 {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'registrar-usuario', component:RegistrarUsuarioComponent},
  {path: 'verificar-correo', component:VerificarCorreoComponent},
  {path: 'recuperar-password', component:RecuperarPasswordComponent},
  {path: 'dashboard', component:DashboardComponent,  children: [
      { path: 'intervencion', component:IntervencionComponent}, ]},
  {path: 'dashboard', component:DashboardComponent,  children: [
      { path: 'agregar-campo', component:AgregarCampoComponent  },]},




  {path: '**', redirectTo:  'login', pathMatch:'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
