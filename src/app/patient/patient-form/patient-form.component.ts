import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Patient} from '../shared/patient.model';
import {PatientPersonal} from '../shared/patient.personal.model';
import {PatientMedical} from '../shared/patient.medical.model';
import {PatientService} from '../shared/patient.service';

@Component({
  selector: 'patient-create',
  templateUrl: 'patient-form.component.html'
})

export class PatientFormComponent {
  patientFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  contactFormGroup: FormGroup;
  diseaseFormGroup: FormGroup;
  formBuilder: FormBuilder;
  patient: Patient;

  constructor(@Inject(FormBuilder) formBuilder: FormBuilder,
              private router: Router,
              private patientService: PatientService) {
    this.formBuilder = formBuilder;
    this.patient = new Patient();
    this.patient.personal = new PatientPersonal();
    this.patient.medical = new PatientMedical();
  }

  ngOnInit() {
    this.validateInputs(this.formBuilder);
  }

  validateInputs(formBuilder: FormBuilder) {
    this.patientFormGroup = formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      picture: [''],
      bloodType: ['', Validators.required]
    });

    this.addressFormGroup = formBuilder.group({
      street: ['', Validators.required],
      number: ['', Validators.required],
      locality: ['', Validators.required],
      county: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zipCode: ['', Validators.required]
    });

    this.contactFormGroup = formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required]
    });

    this.diseaseFormGroup = formBuilder.group({
      name: ['', Validators.required]
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
