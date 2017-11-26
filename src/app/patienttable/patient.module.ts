import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { PatientRoutingModule } from './patient-routing.module';
import { PatienttableComponent } from './patienttable-form/patienttable.component';
import { PatientService } from './shared/patient.service';

@NgModule({
    imports: [
        CommonModule,
        PatientRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        PatienttableComponent
    ],
    providers: [
        PatientService
    ]
})

export class PatientModule { }
