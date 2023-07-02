import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { iAuthRequest } from 'src/app/Core/interfaces/auth';
import { UserService } from 'src/app/services/user/user.service';
import { User } from '../../../Core/interfaces/user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  authData = {
    name: '',
    lastName: '',
    email: '',
    password: '',
  };

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  async registrarse(form: NgForm) {
    if (form.valid) {
      const newUser: User = {
        name: this.authData.name,
        lastName: this.authData.lastName,
        email: this.authData.email,
        password: this.authData.password,
      };

      try {
        const res = await this.userService.AddUser(newUser);
        console.log(res);
        this.router.navigate(['/login']);
      } catch (err) {
        console.log(err);
      }
    }
  }
}
