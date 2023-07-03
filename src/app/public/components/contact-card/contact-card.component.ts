import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/Core/interfaces/contact';
import { ContactService } from 'src/app/services/contact/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {
  showEditDialog: boolean = false;
  emergente: boolean = false;
  @Input() contact: Contact = {} as Contact;
  Contacts: Contact[] = [];

  constructor(
    private _contactService: ContactService,
    private router: Router
  ) {}

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
  // this.router.navigate(['/contacts']);
  // openEditDialog(id: number | undefined) {
  //   const url = `/edit-contact/${id}`;
  //   window.open(url, '_blank', 'width=600,height=400');
  // }

  openEditDialog(contactId: number | undefined): void {
    if (this.contact.id) {
      this.router.navigate(['/edit-contact', this.contact.id]);
    }
  }

  closeEditDialog(): void {
    this.showEditDialog = false;
  }

  verMapa(
    longitude: number | undefined | null,
    latitude: number | undefined | null
  ): void {
    const url = `https://www.google.com/maps/search/?api=1&query=${longitude},${latitude}`;
    window.open(url, '_blank');
  }

  // saveContact(): void {
  //   this._contactService.updateContact(this.contact);
  //   this.closeEditDialog();
  // }
}

// import { Component, Input, OnInit } from '@angular/core';
// import { Contact } from 'src/app/Core/interfaces/contact';
// import { ContactService } from 'src/app/services/contact/contact.service';
// import { Router } from '@angular/router';
// import { EditContactDialogComponent } from '../edit-contact-dialog/editContactDialog.component';
// @Component({
//   selector: 'app-contact-card',
//   templateUrl: './contact-card.component.html',
//   styleUrls: ['./contact-card.component.scss'],
// })
// export class ContactCardComponent implements OnInit {
//   Contacts: any;
//   // contact: any;

//   constructor(
//     private _contactService: ContactService,
//     private router: Router
//   ) {}

//   @Input() contact: Contact = {} as Contact;
//   emergente: boolean = false;
//   showEditForm: boolean = false;
//   // editedContact: Contact = {} as Contact;

//   ngOnInit(): void {
//     this.getContacts();
//   }

//   async getContacts() {
//     try {
//       this.Contacts = await this._contactService.getContacts();
//     } catch (error) {
//       console.log('Error al obtener contactos:', error);
//     }
//   }

//   async deleteContact(id: number) {
//     try {
//       const res = await this._contactService.deleteContact(id);
//       if (res) {
//         this.getContacts();
//       }
//     } catch (error) {
//       console.log('Error al eliminar contacto:', error);
//     }
//   }

//   editContact(contactId: number | undefined) {
//     if (contactId) {
//       this.router.navigate(['/edit-contact', contactId]);
//     }
//   }
// }

// openEditDialog(): void {
//   const dialogRef = this.dialog.open(EditContactDialogComponent, {
//     width: '400px',
//     data: { contact: this.contact },
//   });

//   dialogRef.afterClosed().subscribe((result) => {
//     if (result) {
//       this.getContacts();
//     }
//   });
// }

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
