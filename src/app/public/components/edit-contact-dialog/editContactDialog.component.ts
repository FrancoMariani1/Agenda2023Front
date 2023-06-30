import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Contact } from 'src/app/Core/interfaces/contact';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-edit-contact-dialog',
  templateUrl: './editContactDialog.component.html',
  styleUrls: ['./editContactDialog.component.scss'],
})
export class EditContactDialogComponent {
  editedContact: any;

  constructor(
    private _contactService: ContactService,
    private dialogRef: MatDialogRef<EditContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { contact: Contact }
  ) {
    this.editedContact = data.contact;
    // this.showEditForm = true;
  }

  // ngOnInit(): void {
  //   this.editedContact = this.data.contact;
  // }

  async updateContact() {
    try {
      const res = await this._contactService.updateContact(this.editedContact);
      if (res) {
        this.editedContact();
      }
    } catch (error) {
      console.log('Error al actualizar contacto:', error);
    }
  }

  // cancelEdit() {
  //   this.showEditForm = false;
  //   this.editedContact = {} as Contact;
  // }

  cancelEdit(): void {
    this.dialogRef.close();
  }
}
