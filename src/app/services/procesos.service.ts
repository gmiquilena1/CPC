import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { HttpResponseHandlers } from '../helpers/http';
import { Proceso } from '../helpers/models'

@Injectable()
export class ProcesosService {

  constructor(private _http: Http) { }

  getProcesos():Observable<Proceso[]>{
    let token = localStorage.getItem('cpc_token');
    return this._http.get('api/procesos?token='+token)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)    
  }

}
