import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { PatientRoutingModule } from './patient-routing.module';
import { PatienttableComponent } from './patienttable-form/patienttable.component';
import { PatientService } from './shared/patient.service';

import {InputTextModule,DataTableModule,ButtonModule,DialogModule} from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        PatientRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        InputTextModule,DataTableModule,ButtonModule,DialogModule
    ],
    declarations: [
        PatienttableComponent
    ],
    providers: [
        PatientService
    ]
})

export class PatientModule { }
