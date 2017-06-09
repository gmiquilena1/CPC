import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { HttpResponse } from './http-response';
import { CentroCosto } from '../shared/models'

@Injectable()
export class CentrosCostosService {

  token: string;

  constructor(private _http: Http) {
    this.token = localStorage.getItem('cpc_token');
   }

  getCcostos():Observable<CentroCosto[]>{
    return this._http.get('http://localhost/CPC2/public/api/ccosto?token='+this.token)
    .map(HttpResponse.extractData)
    .catch(HttpResponse.handleError)    
  }
  

}
