import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Patient} from '../shared/patient.model';
import {PatientPersonal} from '../shared/patient.personal.model';
import {PatientMedical} from '../shared/patient.medical.model';
import {PatientService} from '../shared/patient.service';

@Component({
  selector: 'patient-create',
  templateUrl: 'patient-form.component.html'
})

export class PatientFormComponent {
  personalformGroup: FormGroup;
  medicalformGroup: FormGroup;
  formBuilder: FormBuilder;
  patient: Patient;

  constructor(@Inject(FormBuilder) formBuilder: FormBuilder,
              private patientService: PatientService) {
    this.formBuilder = formBuilder;
    this.patient = new Patient();
  }

  ngOnInit() {
    this.validateInputs(this.formBuilder);
  }

  validateInputs(formBuilder: FormBuilder) {
    this.personalformGroup = formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      addresses: ['', Validators.required],
      phoneNumbers: ['', Validators.required],
      emergencyContacts: ['', Validators.required],
      picture: ['', Validators.required]
    });
    this.medicalformGroup = formBuilder.group({
      bloodType: ['', Validators.required],
      chronicDiseases: ['', Validators.required],
      allergies: ['', Validators.required],
      disabilities: ['', Validators.required]
    });
  }

  createPatients() {
    this.patientService.createPatient(this.patient)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

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

}
