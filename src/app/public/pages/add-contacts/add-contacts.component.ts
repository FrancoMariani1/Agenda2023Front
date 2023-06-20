import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Contact } from 'src/app/Core/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.scss'],
})
export class AddContactsComponent {
  constructor(private router: Router, private us: ContactService) {}

  contact: Contact = {
    id: 0,
    celularNumber: 0,
    description: '',
    email: '',
    name: '',
    lastName: '',
    telephoneNumber: 0,
    location: {
      id: 0,
      description: '',
      latitude: 0,
      longitude: 0,
    },
  };

  ngOnInit(): void {}

  async addContact(form: NgForm): Promise<void> {
    if (form.valid) {
      try {
        const response = await this.us.AddContact(this.contact);
        console.log('Contacto agregado:', response);
      } catch (error) {
        console.log('Error al agregar contacto:', error);
      }
    }
  }
}
