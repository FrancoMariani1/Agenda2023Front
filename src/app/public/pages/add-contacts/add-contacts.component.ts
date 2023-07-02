import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { iAuthRequest } from 'src/app/Core/interfaces/auth';
import { FormsModule } from '@angular/forms';
import { Contact } from 'src/app/Core/interfaces/contact';
import { ContactService } from 'src/app/services/contact/contact.service';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/services/location/location.service';
import { Location } from 'src/app/Core/interfaces/location';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.scss'],
})
export class AddContactsComponent {
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private us: ContactService,
    private locationService: LocationService
  ) {}

  authData: iAuthRequest = {
    email: '',
    password: '',
  };

  contact: Contact = {
    // id: 0,
    celularNumber: null,
    description: '',
    email: '',
    name: '',
    lastName: '',
    telephoneNumber: null,
    location: {
      id: 0,
      description: '',
      latitude: null,
      longitude: null,
    },
  };

  ngOnInit(): void {}

  async addContact(form: NgForm): Promise<void> {
    if (form.valid) {
      console.log('Contacto a agregar:', this.contact);
      console.log('Location:', this.contact.location);
      try {
        const location = await this.locationService.addLocation(
          this.contact.location
        );
        // this.contact.location.id = location.id;

        const response = await this.us.AddContact(this.contact);
        console.log('Contacto agregado:', response);
      } catch (error) {
        console.log('Error al agregar contacto:', error);
      }
    }
  }

  fileChangeEvent(event: any): void {
    debugger;
  }
}
