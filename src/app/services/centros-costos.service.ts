import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { HttpResponseHandlers } from '../helpers/http';
import { CentroCosto } from '../helpers/models'

@Injectable()
export class CentrosCostosService {

  token: string;

  constructor(private _http: Http) {
    this.token = localStorage.getItem('cpc_token');
   }

  getCcostos():Observable<CentroCosto[]>{
    return this._http.get('api/ccosto?token='+this.token)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)    
  }
  

}
