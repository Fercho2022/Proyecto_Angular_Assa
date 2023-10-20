import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
  providers: [MessageService],
})
export class RegistrarUsuarioComponent {
  myform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _FirebaseService: FirebaseService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.myform = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repetirPassword: ['', Validators.required],
    });
  }

  registrar() {
    const email = this.myform.value.email;
    const password = this.myform.value.password;
    const repetirPassword = this.myform.value.repetirPassword;
    if (password !== repetirPassword) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Las contraseñas ingresadas deben ser las mismas',
      });

      return;
    }

    this._FirebaseService
      .createEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        this.messageService.add({
          severity: 'success',
          summary: 'Usuario Registrado',
          detail: 'El usuario fue registrado con exito',
        });
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);


      })
      .catch((error) => {
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: this._FirebaseService.firebaseError(error.code),
        });
        this.myform.reset();
      });
  }
}
