import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { iAuthRequest } from 'src/app/Core/interfaces/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  authData: iAuthRequest = {
    UserName: '',
    Password: '',
  };

  // async agregar(form: NgForm) {
  //   //Valor del formulario para no usar NgModel
  //   console.log(form.value);
  //   const token = await this.auth.login(form.value);
  //   if (token) this.router.navigate(['']);
  // }

  // async login(form: NgForm) {
  //   //Valor del formulario para no usar NgModel
  //   console.log(form.value);
  //   const token = await this.auth.login(form.value);
  //   if (token) this.router.navigate(['']);
  // }
}

// export class IniciarComponent implements OnInit {

//   constructor(private auth:AuthService, private router:Router) { }
//   ngOnInit(): void {
//     // throw new Error('Method not implemented.');
//   }

//Hecho usando NgModel
