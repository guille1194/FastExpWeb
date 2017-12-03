import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Patient} from '../shared/patient.model';
import {PatientPersonal} from '../shared/patient.personal.model';
import {PatientMedical} from '../shared/patient.medical.model';
import {PatientService} from '../shared/patient.service';
import {Address} from '../../shared/models/address.model';
import {EmergencyContact} from '../../shared/models/emergency-contact.model';
import {Disease} from '../../shared/models/disease.model';

@Component({
  selector: 'patient-create',
  templateUrl: 'patient-form.component.html'
})

export class PatientFormComponent {
  patientFormGroup: FormGroup;
  formBuilder: FormBuilder;
  patient: Patient;

  constructor(@Inject(FormBuilder) formBuilder: FormBuilder,
              private router: Router,
              private patientService: PatientService) {
    this.formBuilder = formBuilder;

    this.patient = new Patient();

    this.patient.personal = new PatientPersonal();
    this.patient.personal.addresses = [];
    this.patient.personal.addresses.push(new Address());
    this.patient.personal.phoneNumbers = [];
    this.patient.personal.emergencyContacts = [];
    this.patient.personal.emergencyContacts.push(new EmergencyContact());
    this.patient.personal.emergencyContacts[0].phoneNumbers = [];

    this.patient.medical = new PatientMedical();
    this.patient.medical.chronicDiseases = [];
    this.patient.medical.chronicDiseases.push(new Disease());
    this.patient.medical.chronicDiseases[0].treatments = [];
    this.patient.medical.allergies = [];
    this.patient.medical.allergies.push(new Disease());
    this.patient.medical.allergies[0].treatments = [];
    this.patient.medical.disabilities = [];
    this.patient.medical.disabilities.push(new Disease());
    this.patient.medical.disabilities[0].treatments = [];
  }

  ngOnInit() {
    this.validateInputs(this.formBuilder);
  }

  validateInputs(formBuilder: FormBuilder) {
    this.patientFormGroup = formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      street: [''],
      number: [''],
      locality: [''],
      county: [''],
      state: [''],
      country: [''],
      zipCode: [''],
      phoneNumber: [''],
      contactName: ['', Validators.required],
      contactLastName: ['', Validators.required],
      contactPhoneNumber: ['', Validators.required],
      picture: [''],
      bloodType: ['', Validators.required],
      chronicDiseaseName: [''],
      chronicDiseaseTreatment: [''],
      allergyName: [''],
      allergyTreatment: [''],
      disabilityName: [''],
      disabilityTreatment: ['']
    });
  }

  save() {
    this.patientService.createPatient(this.patient)
      .subscribe(
        data => {
          this.router.navigate(['patient']);
        },
        error => {
          console.log(error);
        });
  }
}
