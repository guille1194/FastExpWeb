import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientConstants } from './shared/patient.config';
import { PatienttableComponent } from './patienttable-form/patienttable.component';

const patientRoutes: Routes = [
    {
        path: 'patient',
        component: PatienttableComponent,
        data: {
            title: PatientConstants.PATIENT_TITLE
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(patientRoutes)
    ],

    exports: [
        RouterModule
    ]
})

export class PatientRoutingModule {}
