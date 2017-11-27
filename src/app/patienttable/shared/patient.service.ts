import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Patient } from '../shared/patient.model';

@Injectable()
export class PatientService {

    constructor(private http: Http) {}

    getPatient() {
        return this.http.get('app/patients.json')
                    .toPromise()
                    .then(res => <Patient[]> res.json().data)
                    .then(data => { return data; });
    }
}
