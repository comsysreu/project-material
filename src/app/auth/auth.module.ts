import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Login2Component } from './login2/login2.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    NotFoundComponent,
    LoginComponent,
    Login2Component
  ],
  imports: [
    CommonModule,
    AuthRoutingModule, 
    ReactiveFormsModule, MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule
  ]
})
export class AuthModule { }
