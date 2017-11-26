import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { Patient } from '../shared/patient.model';

@Injectable()
export class PatientService {

    private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor( private http: HttpClient) { }

  getPatient(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.serviceUrl);
  }

}
