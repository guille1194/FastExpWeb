import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Patient} from '../shared/patient.model';
import {PatientService} from '../shared/patient.service';

@Component({
  selector: 'patient-list',
  templateUrl: './patient-list.component.html'
})

export class PatientListComponent {
  patient: Patient;
  patients: Patient[];
  selectedPatient: Patient;

  constructor(private patientService: PatientService,
              private  router: Router) {
    this.patient = new Patient();
  }

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
    this.patientService.getAllPatients()
      .subscribe(
        data => {
          this.patients = data;
        },
        error => {
          this.patients = [];
          console.log(error);
        });
  }

  addPatient() {
    this.router.navigate(['patient/create']);
  }

  onRowSelect(event) {

  }
}
