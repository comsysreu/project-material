import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { ViewComponent } from './view/view.component';

import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { UserAbcComponent } from './user/user-abc/user-abc.component';
import { ProfileAbcComponent } from './profile/profile-abc/profile-abc.component';
import { ViewAbcComponent } from './view/view-abc/view-abc.component';

@NgModule({
  declarations: [
    ProfileComponent,
    UserComponent,
    ViewComponent,
    UserAbcComponent,
    ProfileAbcComponent,
    ViewAbcComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    MatIconModule,
    SharedModule,

    MatInputModule,
    ReactiveFormsModule
  ]
})
export class AccountsModule { }
