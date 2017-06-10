import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { HttpResponseHandlers } from '../helpers/http';
import { CentroCosto } from '../helpers/models'

@Injectable()
export class CentrosCostosService {

  constructor(private _http: Http) { }

  getCcostos():Observable<CentroCosto[]>{
    let token = localStorage.getItem('cpc_token');
    return this._http.get('api/ccosto?token='+token)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)    
  }
  

}
