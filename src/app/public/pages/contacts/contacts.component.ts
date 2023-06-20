import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Core/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private us: ContactService) {}

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
      userName: 'prueba1',
      location: {
        id: 1,
        latitude: 0.555,
        longitude: 0.444,
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
