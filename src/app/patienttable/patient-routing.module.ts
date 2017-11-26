import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { PatientConstants } from './shared/patient.config';
import { PatienttableComponent } from './patienttable-form/patienttable.component';

const patientRoutes: Routes = [
    {
        path: 'patient',
        canActivate: [AuthGuard],
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
