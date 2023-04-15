import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Core/interfaces/contact';
import { ContactServicesService } from 'src/app/services/contact-services.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(public us: ContactServicesService) {}

  ngOnInit(): void {
    this.getData();
  }

  // ngOnInit(): void {
  //   this.getContacts();
  // }

  async getData() {
    const contact = {
      id: 1,
      name: 'test',
      lastName: 'test',
      avatar:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png',
      description: 'test',
      email: 'test@test.com',
      telephoneNumber: 123,
      celularNumber: 123,
      UserName: 'prueba1',
      Location: {
        Id: 1,
        Latitude: 0.555,
        Longitude: 0.444,
        description: 'Casa',
      },
    };

    try {
      this.contacts = await this.us.getContacts();
    } catch (err) {
      this.contacts = [contact];
    }

    console.log(this.contacts);
  }
}
