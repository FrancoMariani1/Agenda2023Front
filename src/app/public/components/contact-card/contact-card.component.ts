import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/Core/interfaces/contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {
  Contactos: any;
  // contact: any;

  constructor() {}

  @Input() contacto: Contact = {} as Contact;
  emergente: boolean = false;

  ngOnInit(): void {}
}
