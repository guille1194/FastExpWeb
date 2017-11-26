import { Injectable } from "@angular/core";
import { Headers, RequestOptions } from "@angular/http";
import { AppConstants } from "../../app.config";


@Injectable()
export class AuthService {
    constructor() {}

    getRequestOptions() {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('API_KEY', AppConstants.API_KEY);

        return new RequestOptions({ headers: headers });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
