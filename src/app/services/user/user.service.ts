import { Injectable } from '@angular/core';
import { User } from '../../Core/interfaces/user';
import { BACKEND_URL } from 'src/app/Core/constants/backend';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  token = JSON.parse(localStorage.getItem('session') || '{}').token;
  config = {
    headers: { Authorization: `Bearer ${this.token}` },
  };

  constructor() {}

  async getUsers(): Promise<User[]> {
    const users = await axios.get(BACKEND_URL + '/api/User', this.config);
    return users.data;
  }

  async getUser(id: number): Promise<User[]> {
    const user = await axios.get(BACKEND_URL + '/api/User/' + id, this.config);
    return user.data;
  }

  async deleteUser(id: number): Promise<boolean> {
    const res = await axios.delete(
      BACKEND_URL + '/api/User/' + id,
      this.config
    );
    return res.status == 200;
  }

  async AddUser(c: User): Promise<User> {
    const user = await axios.post(BACKEND_URL + '/api/User', c, this.config);
    return user.data;
  }

  async UpdateUser(c: User): Promise<User> {
    const user = await axios.put(BACKEND_URL + '/api/User', c, this.config);
    return user.data;
  }
}
