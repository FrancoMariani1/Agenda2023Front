import { Component, Input, Output, OnInit } from '@angular/core';
import { Contact } from 'src/app/Core/interfaces/contact';
import { ContactService } from 'src/app/services/contact/contact.service';
import { EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationService } from 'src/app/services/location/location.service';
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  @Input() contact: Contact = {} as Contact;
  contacts: Contact[] = [];

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId) {
      this.getContact(parseInt(contactId));
    }
  }

  async getContact(id: number): Promise<void> {
    try {
      this.contact = await this.contactService.getContact(id);
      console.log('Contacto obtenido:', this.contact);
    } catch (error) {
      console.log('Error al obtener contacto:', error);
    }
  }

  saveChanges() {
    try {
      if (this.contact.id) {
        this.contactService.updateContact(this.contact.id, this.contact);
        console.log('Contacto actualizado:', this.contact);
      }
    } catch (error) {
      console.log('Error al actualizar contacto:', error);
    }
  }

  // updateContact(form: NgForm) {
  //   if (form.valid) {
  //     try {
  //       if (this.contact.id)
  //         this.contactService.updateContact(this.contact.id, this.contact);
  //       console.log('Contacto actualizado:', this.contact);
  //     } catch (error) {
  //       console.log('Error al actualizar contacto:', error);
  //     }
  //   }
  // }

  fileChangeEvent(event: any): void {}
}
