import {Component, OnInit} from '@angular/core';
import {Patient} from '../shared/patient.model';
import {PatientService} from '../shared/patient.service';

@Component({
    selector: 'patient-list',
    templateUrl: './patient-list.component.html'
})

export class PatientListComponent {
    qrData = null;
    createdCode = null;
    patient: Patient;
    patients: Patient[];
    selectedPatient: Patient;
    displayDialog: boolean;
    newPatient: boolean;


    constructor(private patientService: PatientService) {
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
                    console.log(this.patients);
                },
                error => {
                    this.patients = [];
                    console.log(error);
                });
    }

    // showDialogToAdd() {
    //     this.newPatient = true;
    //     this.displayDialog = true;
    // }

    // save() {
    //     if (this.newPatient)
    //         this.patients.push(this.patient);
    //     else
    //         this.patients[this.findSelectedPatientIndex()] = this.patient;
    //
    //     this.patient = null;
    //     this.displayDialog = false;
    // }

    // delete() {
    //     this.patients.splice(this.findSelectedPatientIndex(), 1);
    //     this.patient = null;
    //     this.displayDialog = false;
    // }

    onRowSelect(event) {
        // this.newPatient = false;
        // this.patient = this.clonePatient(event.data);
        // this.displayDialog = true;
    }

    // clonePatient(c: Patient): Patient {
    //     let patient = new PrimePatient();
    //     for (let prop in c) {
    //         patient[prop] = c[prop];
    //     }
    //     return patient;
    // }

    // findSelectedPatientIndex(): number {
    //     return this.patients.indexOf(this.selectedPatient);
    // }
}
