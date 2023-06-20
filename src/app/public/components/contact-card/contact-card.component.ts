import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/Core/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';
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
    // this.getContactos();
  }

  // getContactos() {
  //   this._contactService.getContacts().subscribe((data) => {
  //     this.Contactos = data;
  //   });
  // }
}
