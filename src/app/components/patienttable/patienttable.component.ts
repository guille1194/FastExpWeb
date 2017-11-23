import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'patienttable',
  templateUrl: './patienttable.component.html',
  styleUrls: ['./patienttable.component.css']
})
export class PatienttableComponent implements OnInit {
  qrData = null;
  createdCode = null;
  dataSource = new PatientDataSource(this.patientService);
  displayedColumns = ['name', 'email', 'phone', 'company'];

  constructor( private patientService: PatientService) { }

  ngOnInit() {
  }

  createCode() {
     this.createdCode = this.qrData;
   }

}

export class PatientDataSource extends DataSource<any> {
  constructor( private patientService: PatientService) {
    super();
  }

  connect(): Observable<Patient[]> {
    return this.patientService.getPatient();
  }
  disconnect() {}
}
