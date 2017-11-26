import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login-form/login-form.component';
import { LoginService } from './shared/login.service';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        LoginService
    ]
})

export class LoginModule { }