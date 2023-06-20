import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactsComponent } from './add-contacts.component';
const routes: Routes = [
  {
    path: '',
    component: AddContactsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddContactsRoutingModule {}
