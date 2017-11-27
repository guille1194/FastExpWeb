import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Patient} from '../shared/patient.model';
import {PatientService} from '../shared/patient.service';

class PrimePatient implements Patient {
    constructor(public name?, public empId?, public city?) {
    }
}

@Component({
    selector: 'patienttable',
    templateUrl: './patienttable.component.html'
})

export class PatienttableComponent {
    qrData = null;
    createdCode = null;

    displayDialog: boolean;

    patient: Patient = new PrimePatient();

    selectedPatient: Patient;

    newPatient: boolean;

    patients: Patient[];

    constructor(private patientService: PatientService) {
    }

    ngOnInit() {
        // this.patientService.getPatient().then(patients => this.patients = patients);
        this.patients = [];
    }

    showDialogToAdd() {
        this.newPatient = true;
        this.patient = new PrimePatient();
        this.displayDialog = true;
    }

    save() {
        if (this.newPatient)
            this.patients.push(this.patient);
        else
            this.patients[this.findSelectedPatientIndex()] = this.patient;

        this.patient = null;
        this.displayDialog = false;
    }

    delete() {
        this.patients.splice(this.findSelectedPatientIndex(), 1);
        this.patient = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newPatient = false;
        this.patient = this.clonePatient(event.data);
        this.displayDialog = true;
    }

    clonePatient(c: Patient): Patient {
        let patient = new PrimePatient();
        for (let prop in c) {
            patient[prop] = c[prop];
        }
        return patient;
    }

    findSelectedPatientIndex(): number {
        return this.patients.indexOf(this.selectedPatient);
    }

}
