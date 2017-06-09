import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { HttpResponse } from './http-response';
import { Proceso } from '../shared/models'

@Injectable()
export class ProcesosService {

  token: string;

  constructor(private _http: Http) {
    this.token = localStorage.getItem('cpc_token');
   }

  getProcesos():Observable<Proceso[]>{
    return this._http.get('http://localhost/CPC2/public/api/procesos?token='+this.token)
    .map(HttpResponse.extractData)
    .catch(HttpResponse.handleError)    
  }

}
