import { Injectable } from '@angular/core';
import { ContactCardComponent } from 'src/app/public/components/contact-card/contact-card.component';
import { Contact } from 'src/app/Core/interfaces/contact';
// import contactosMock from '../../Mock/contactosMock.json';

@Injectable({
  providedIn: 'root',
})
export class ContactServicesService {
  constructor() {}

  async getUserDetails(id: number) {
    console.log('ok');

    // const jsonData = await this.getUsers();
    // const user = jsonData.filter((user) => user.id == id);
    // return user.length > 0 ? user[0] : {};
  }

  async getContacts(): Promise<Contact[]> {
    /* return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(contactosMock)
      }, 300);
    }); */

    const data = await fetch('https://localhost:7034/api/Contact/');
    return await data.json();
  }

  async getContact(id: number): Promise<Contact[]> {
    const data = await fetch('//localhost:7034/api/Contact/GetOne/' + id);
    return await data.json();
  }

  async deleteContact(id: number): Promise<boolean> {
    const res = await fetch('https://localhost:7034/api/contact/' + id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    return res.ok;
  }

  async AddContact(c: Contact): Promise<Contact> {
    const res = await fetch('https://localhost:7034/api/contact/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(c),
    });
    return res.json();
  }

  async UpdateContact(c: Contact): Promise<Contact> {
    const res = await fetch('https://localhost:7034/api/contact/', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(c),
    });
    return res.json();
  }
}
