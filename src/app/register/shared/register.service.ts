import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { environment } from '../../../environments/environment.prod';
import { AuthService } from '../../core/services/auth.service';
import { RegisterConstants } from '../shared/register.config';

import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {
    constructor(private http: Http,
                private authService: AuthService) { }

    signUp(userName: string, password: string, name: string, lastName:string, email:string ){
        let url = environment.apiUrl + RegisterConstants.API_SIGN_UP;

        let options = this.authService.getRequestOptions();

        let data = JSON.stringify({
            userName: userName,
            password: password,
            name: name,
            lastName: lastName,
            email: email
        });

        return this.http.post(url, data, options)
            .map(response => {
                response = response.json();

                console.log(response);
                localStorage.setItem('currentUser', JSON.stringify(response));

                return response;
            });

    }
}
