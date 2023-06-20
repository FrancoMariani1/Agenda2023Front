import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AddContactsRoutingModule } from './add-contacts-routing.module';
import { AddContactsComponent } from './add-contacts.component';

@NgModule({
  declarations: [AddContactsComponent],
  imports: [CommonModule, AddContactsRoutingModule, FormsModule],
})
export class AddContactsModule {}
