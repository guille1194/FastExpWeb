import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../core/services/auth.service';
import { LoginConstants } from '../shared/login.config';

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    constructor(private http: Http,
                private authService: AuthService) { }

    signIn(userName: string, password: string ){
        let url = environment.apiUrl + LoginConstants.API_SIGN_IN;

        let options = this.authService.getRequestOptions();

        let data = JSON.stringify({
            userName: userName,
            password: password
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
