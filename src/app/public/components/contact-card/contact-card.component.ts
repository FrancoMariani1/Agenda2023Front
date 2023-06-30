//quiero que el button delete me borre el contacto de la base de datos

import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/Core/interfaces/contact';
import { ContactService } from 'src/app/services/contact/contact.service';
import { MatDialog } from '@angular/material';
import { EditContactDialogComponent } from '../edit-contact-dialog/editContactDialog.component';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {
  Contacts: any;
  // contact: any;

  constructor(
    private _contactService: ContactService,
    private dialog: MatDialog
  ) {}

  @Input() contact: Contact = {} as Contact;
  emergente: boolean = false;
  // showEditForm: boolean = false;
  // editedContact: Contact = {} as Contact;

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

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditContactDialogComponent, {
      width: '400px',
      data: { contact: this.contact },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getContacts();
      }
    });
  }
}

// async updateContact() {
//   try {
//     const res = await this._contactService.updateContact(this.editedContact);
//     if (res) {
//       this.getContacts();
//     }
//   } catch (error) {
//     console.log('Error al actualizar contacto:', error);
//   }
// }

// cancelEdit() {
//   this.showEditForm = false;
//   this.editedContact = {} as Contact;
// }

// getContacts() {
//   this._contactService.getContacts().subscribe((data) => {
//     this.Contacts = data;
//   });
// }
