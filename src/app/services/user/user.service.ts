import { Injectable } from '@angular/core';
import { User } from '../../Core/interfaces/user';
import { BACKEND_URL } from 'src/app/Core/constants/backend';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  async getUsers(): Promise<User[]> {
    /* return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(contactosMock)
      }, 300);
    }); */

    const data = await fetch(BACKEND_URL + '/api/User');
    return await data.json();
  }

  async getUser(id: number): Promise<User[]> {
    const data = await fetch(BACKEND_URL + '/api/User' + id);
    return await data.json();
  }

  async deleteUser(id: number): Promise<boolean> {
    const res = await fetch(BACKEND_URL + '/api/User' + id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    return res.ok;
  }

  async AddUser(c: User): Promise<User> {
    const res = await fetch(BACKEND_URL + '/api/User', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(c),
    });
    return res.json();
  }

  async UpdateUser(c: User): Promise<User> {
    const res = await fetch(BACKEND_URL + '/api/User', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(c),
    });
    return res.json();
  }
}
