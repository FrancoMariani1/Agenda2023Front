//crear el getContactById, el deleteContact y el updateContact en el service igual que el addContact y el getContacts

import { Injectable } from '@angular/core';
import { ContactCardComponent } from 'src/app/public/components/contact-card/contact-card.component';
import { Contact } from 'src/app/Core/interfaces/contact';
import { BACKEND_URL } from '../../Core/constants/backend';
import axios from 'axios';
// import contactosMock from '../../Mock/contactosMock.json';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  token = JSON.parse(localStorage.getItem('session') || '{}').token;
  config = {
    headers: { Authorization: `Bearer ${this.token}` },
  };

  constructor() {}

  async getUserDetails(id: number) {
    console.log('ok');

    // const jsonData = await this.getUsers();
    // const user = jsonData.filter((user) => user.id == id);
    // return user.length > 0 ? user[0] : {};
  }

  async getContacts(): Promise<Contact[]> {
    const contacts = await axios.get(BACKEND_URL + '/api/contact', this.config);
    return contacts.data;
  }

  async getContact(id: number): Promise<Contact> {
    const contact = await axios.get(
      BACKEND_URL + '/api/contact/' + id,
      this.config
    );
    return contact.data;
  }

  async deleteContact(id: number): Promise<boolean> {
    const res = await axios.delete(
      BACKEND_URL + '/api/contact/' + id,
      this.config
    );
    return res.status == 200;
  }

  async updateContact(c: Contact): Promise<Contact> {
    const res = await axios.put(BACKEND_URL + '/api/contact/', c, this.config);
    return res.data;
  }

  async AddContact(c: Contact): Promise<Contact> {
    const contact = await axios.post(
      BACKEND_URL + '/api/contact',
      c,
      this.config
    );
    return contact.data;
  }
}

// async getContact(id: number): Promise<Contact[]> {
//   const data = await fetch(BACKEND_URL + '/api/contact/GetOne/' + id);
//   return await data.json();
// }

// async deleteContact(id: number): Promise<boolean> {
//   const res = await fetch(BACKEND_URL + '/api/contact/' + id, {
//     method: 'DELETE',
//     headers: {
//       'Content-type': 'application/json',
//     },
//   });
//   return res.ok;
// }

// async UpdateContact(c: Contact): Promise<Contact> {
//   const res = await fetch(BACKEND_URL + '/api/contact/', {
//     method: 'PUT',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(c),
//   });
//   return res.json();
// }
