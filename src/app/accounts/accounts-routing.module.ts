import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { ViewComponent } from './view/view.component';
import { UserAbcComponent } from './user/user-abc/user-abc.component';
import { ProfileAbcComponent } from './profile/profile-abc/profile-abc.component';
import { ViewAbcComponent } from './view/view-abc/view-abc.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: 'user',
    component: UserComponent,
    data: {
      title: 'Usuarios',
      urls: [
        { title: 'Gestión de Cuentas' },
        { title: 'Usuarios' }
      ]
    }
  },
  {
    path: 'user/new',
    component: UserAbcComponent,
    data: {
      title: 'Usuarios',
      urls: [
        { title: 'Gestión de Cuentas' },
        { title: 'Agregar Registro' }
      ]
    }
  },
  {
    path: 'user/edit',
    component: UserAbcComponent,
    data: {
      title: 'Usuarios',
      urls: [
        { title: 'Gestión de Cuentas' },
        { title: 'Editar Registro' }
      ]
    }
  },
  {
    path: 'user/:id',
    component: UserAbcComponent,
    data: {
      title: 'Usuarios',
      urls: [
        { title: 'Gestión de Cuentas' },
        { title: 'Ver Registro' }
      ]
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      title: 'Perfiles',
      urls: [
        { title: 'Gestión de Cuentas' },
        { title: 'Perfiles' }
      ]
    }
  },
  {
    path: 'profile/new',
    component: ProfileAbcComponent,
    data: {
      title: 'Perfiles',
      urls: [
        { title: 'Gestión de Cuentas' },
        { title: 'Nuevo Registro' }
      ]
    }
  },
  {
    path: 'profile/edit/:id',
    component: ProfileAbcComponent,
    data: {
      title: 'Perfiles',
      urls: [
        { title: 'Gestión de Cuentas' },
        { title: 'Editar Registro' }
      ]
    }
  },
  {
    path: 'profile/:id',
    component: ProfileAbcComponent,
    data: {
      title: 'Perfiles',
      urls: [
        { title: 'Gestión de Cuentas' },
        { title: 'Ver Registro' }
      ]
    }
  },
  {
    path: 'view',
    component: ViewComponent,
    data: {
      title: 'Vistas',
      urls: [
        { title: 'Gestión de Cuentas' },
        { title: 'Vistas' }
      ]
    }
  },
  {
    path: 'view/new',
    component: ViewAbcComponent,
    data: {
      title: 'Vistas',
      urls: [
        { title: 'Gestión de Cuentas' },
        { title: 'Nuevo Registro' }
      ]
    }
  },
  {
    path: 'view/edit/:id',
    component: ViewAbcComponent,
    data: {
      title: 'Vistas',
      urls: [
        { title: 'Gestión de Cuentas' },
        { title: 'Editar Registro' }
      ]
    }
  },
  {
    path: 'view/:id',
    component: ViewAbcComponent,
    data: {
      title: 'Vistas',
      urls: [
        { title: 'Gestión de Cuentas' },
        { title: 'Ver Registro' }
      ]
    }
  },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
