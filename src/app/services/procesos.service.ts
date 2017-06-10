import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { HttpResponseHandlers } from '../helpers/http';
import { Proceso } from '../helpers/models'

@Injectable()
export class ProcesosService {

  token: string;

  constructor(private _http: Http) {
    this.token = localStorage.getItem('cpc_token');
   }

  getProcesos():Observable<Proceso[]>{
    return this._http.get('api/procesos?token='+this.token)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)    
  }

}
