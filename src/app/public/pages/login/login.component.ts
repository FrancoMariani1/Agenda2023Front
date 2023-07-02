import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { iAuthRequest } from 'src/app/Core/interfaces/auth';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private auth: AuthenticationService) {}

  authData: iAuthRequest = {
    email: '',
    password: '',
  };

  async login(form: NgForm) {
    console.log('Login button clicked');
    //Valor del formulario para no usar NgModel
    console.log(form.value);
    const token = await this.auth.login(form.value);
    if (token) {
      this.router.navigate(['/contacts']).then(() => {
        window.location.reload();
      });
    }
  }
}

// ngOnInit(): void {}

// authData: iAuthRequest = {
//   email: '',
//   password: '',
// };

// async agregar(form: NgForm) {
//   //Valor del formulario para no usar NgModel
//   console.log(form.value);
//   const token = await this.auth.login(form.value);
//   if (token) this.router.navigate(['']);
// }

// const token = await this.auth.login(form.value);
// if (token) this.router.navigate(['']);

// login(form: NgForm) {
//   // Verificar si el formulario es válido (opcional)
//   if (form.valid) {
//     // Redireccionar al usuario a la página principal o a la ruta deseada
//     this.router.navigate(['']);
//   }
// }

//   authData: iAuthRequest = {
//     UserName: '',
//     Password: '',
//   };

//   async agregar(form: NgForm) {
//     //Valor del formulario para no usar NgModel
//     console.log(form.value);
//     const token = await this.auth.login(form.value);
//     if (token) this.router.navigate(['']);
//   }

//   async login(form: NgForm) {
//     //Valor del formulario para no usar NgModel
//     console.log(form.value);
//     const token = await this.auth.login(form.value);
//     if (token) this.router.navigate(['']);
//   }
// }

// export class IniciarComponent implements OnInit {

//   constructor(private auth:AuthService, private router:Router) { }
//   ngOnInit(): void {
//     // throw new Error('Method not implemented.');
//   }

//Hecho usando NgModel
