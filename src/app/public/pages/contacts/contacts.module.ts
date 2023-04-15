import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactCardComponent } from '../../components/contact-card/contact-card.component';

@NgModule({
  declarations: [ContactsComponent, ContactCardComponent],
  imports: [FormsModule, CommonModule, ContactsRoutingModule],
})
export class ContactsModule {}
