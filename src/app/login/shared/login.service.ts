import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../../environments/environment.prod';
import {AuthService} from '../../core/services/auth.service';
import {UtilitiesService} from "../../core/services/utilities.service";
import {LoginConstants} from '../shared/login.config';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    constructor(private http: Http,
                private authService: AuthService,
                private utilitiesService: UtilitiesService) {
    }

    signIn(userName: string, password: string) {
        let url = environment.apiUrl + LoginConstants.API_SIGN_IN;

        let options = this.authService.getRequestOptions();

        let data = JSON.stringify({
            userName: userName,
            password: password
        });

        return this.http.post(url, data, options)
            .map(res => {
                let data = this.utilitiesService.extractDataFromJSON(res);
                localStorage.removeItem('currentSession');
                localStorage.setItem('currentSession', JSON.stringify({user: data.user, token: data.token}));

                return data;
            });
    }
}
