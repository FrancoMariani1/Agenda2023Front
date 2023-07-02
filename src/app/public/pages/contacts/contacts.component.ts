import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Core/interfaces/contact';
import { ContactService } from 'src/app/services/contact/contact.service';

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
    this.contacts = [];

    try {
      this.contacts = await this.us.getContacts();
    } catch (err) {
      console.log(err);
    }

    console.log(this.contacts);
  }
}
