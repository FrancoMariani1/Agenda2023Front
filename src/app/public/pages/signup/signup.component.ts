import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { iAuthRequest } from 'src/app/Core/interfaces/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  authData: iAuthRequest = {
    UserName: '',
    Password: '',
  };

  registrarse(form: NgForm) {
    // Verificar si el formulario es válido (opcional)
    if (form.valid) {
      // Redireccionar al usuario a la página principal o a la ruta deseada
      this.router.navigate(['']);
    }
  }
}
