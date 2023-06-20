import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./public/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./public/pages/contacts/contacts.module').then(
        (m) => m.ContactsModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./public/pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./public/pages/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'add-contacts',
    loadChildren: () =>
      import('./public/pages/add-contacts/add-contacts.module').then(
        (m) => m.AddContactsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
