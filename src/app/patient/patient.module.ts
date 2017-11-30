import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {PatientRoutingModule} from './patient-routing.module';
import {PatientListComponent} from './patient-list/patient-list.component';
import { PatientCreateComponent } from './patient-create/patient.create.component';
import {PatientService} from './shared/patient.service';

import {InputTextModule, DataTableModule, ButtonModule, DialogModule} from 'primeng/primeng';
import {UtilitiesService} from "../core/services/utilities.service";

@NgModule({
    imports: [
        CommonModule,
        PatientRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        InputTextModule,
        DataTableModule,
        ButtonModule,
        DialogModule
    ],
    declarations: [
        PatientListComponent,
        PatientCreateComponent
    ],
    providers: [
        PatientService,
        UtilitiesService
    ]
})

export class PatientModule {
}
