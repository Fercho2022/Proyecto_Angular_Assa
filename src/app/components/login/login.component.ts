import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginUsuario: FormGroup;
  loading:boolean=false;

  constructor(
    private fb: FormBuilder,
    private _FirebaseService: FirebaseService,

    private router: Router
  ) {
    this.loginUsuario = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;
    this.loading=true;
    this._FirebaseService
      .getEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
             setTimeout(() => {
          this.router.navigate(['/dashboard']);
          this.loading=false;
        }, 1000);
      })
      .catch((error) => {
        console.log(error);

      });
  }
}
