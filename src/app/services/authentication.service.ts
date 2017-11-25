import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { appConfig } from '../app.config';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login( userName:string, password:string ){

      let url = appConfig + "/signIn";

      let header=new Headers({'Content-Type': 'application/json', 'API_KEY':
      'RWxHdWlsbGVTZUxhQ29tZVhE'});

      let options = new RequestOptions({ headers: header });

      let data = JSON.stringify({
        userName: userName,
        password: password
      });

      return this.http.post( url, data, options )
                      .map( resp=>{

                      let data_resp = resp.json();
                      console.log( data_resp );

                      if( data_resp.error ){
                        localStorage.setItem('currentUser', JSON.stringify(data_resp));
                      }

                      return data_resp;

                    });

    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
