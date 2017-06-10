import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { HttpResponseHandlers } from '../helpers/http';

@Injectable()
export class AuthService {
  public token: string;

  constructor(private _http: Http) { }

  login(credenciales: any): Observable<any> {
    return this._http.post('api/authenticate', credenciales)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('cpc_user', credenciales.email);
          localStorage.setItem('cpc_token', token);

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      })
      .catch(HttpResponseHandlers.handleError);
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('cpc_user');
    localStorage.removeItem('cpc_token');
  }

}
