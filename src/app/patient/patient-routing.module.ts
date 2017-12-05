import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../core/guards/auth.guard';
import {PatientConstants} from './shared/patient.config';
import {PatientListComponent} from './patient-list/patient-list.component';
import {PatientFormComponent} from './patient-form/patient-form.component';

const patientRoutes: Routes = [
  {
    path: 'patient',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: PatientListComponent,
    data: {
      title: PatientConstants.PATIENT_TITLE
    }
  },
  {
    path: 'patient/create',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: PatientFormComponent,
    data: {
      title: PatientConstants.PATIENT_CREATE_TITLE
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

export class PatientRoutingModule {
}
