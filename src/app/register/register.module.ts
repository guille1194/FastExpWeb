import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register-form/register-form.component';
import { RegisterService } from './shared/register.service';

@NgModule({
    imports: [
        CommonModule,
        RegisterRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        RegisterComponent
    ],
    providers: [
        RegisterService
    ]
})

export class RegisterModule { }
