import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditContactComponent } from './public/components/add-edit-contact/add-edit-contact.component';
import { ContactListComponent } from './public/components/contact-list/contact-list.component';
import { ViewContactComponent } from './public/components/view-contact/view-contact.component';
import { HeaderComponent } from './public/components/header/header.component';
import { ContactCardComponent } from './public/components/contact-card/contact-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditContactComponent,
    ContactListComponent,
    ViewContactComponent,
    HeaderComponent,
    // ContactCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
