//quiero que el button delete me borre el contacto de la base de datos

import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/Core/interfaces/contact';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {
  Contacts: any;
  // contact: any;

  constructor(private _contactService: ContactService) {}

  @Input() contact: Contact = {} as Contact;
  emergente: boolean = false;

  ngOnInit(): void {
    this.getContacts();
  }

  async getContacts() {
    try {
      this.Contacts = await this._contactService.getContacts();
    } catch (error) {
      console.log('Error al obtener contactos:', error);
    }
  }

  async deleteContact(id: number) {
    try {
      const res = await this._contactService.deleteContact(id);
      if (res) {
        this.getContacts();
      }
    } catch (error) {
      console.log('Error al eliminar contacto:', error);
    }
  }

  // getContacts() {
  //   this._contactService.getContacts().subscribe((data) => {
  //     this.Contacts = data;
  //   });
  // }
}
