import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { Patient } from '../models/patient.model';

@Injectable()
export class PatientService {

    private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor( private http: HttpClient) { }

  getUser(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.serviceUrl);
  }

}
