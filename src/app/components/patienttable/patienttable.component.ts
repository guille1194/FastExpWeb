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

  dataSource = new DataSource(this.patientService);
  displayedColumns = ['name', 'email', 'phone', 'company'];

  constructor( private patientService: PatientService) { }

  ngOnInit() {
  }

}

export class PatientDataSource extends DataSource<any> {
  constructor( private userService: PatientService) {
    super();
  }

  connect(): Observable<Patient[]> {
    return this.patientService.getPatient();
  }
  disconnect() {}
}
