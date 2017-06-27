import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { HttpResponseHandlers } from '../helpers/http';
import { Proceso, DataFormProceso, ApiResponse } from '../helpers/models'

@Injectable()
export class ProcesosService {

  constructor(private _http: Http) { }

  getProcesos():Observable<Proceso[]>{
    let token = localStorage.getItem('cpc_token');
    return this._http.get('api/procesos?token='+token)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)    
  }

  buscar(id:number):Observable<Proceso>{
    let token = localStorage.getItem('cpc_token');
    return this._http.get('api/procesos/buscar/'+id+'?token='+token)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)    
  }

  dataForm():Observable<DataFormProceso>{
    let token = localStorage.getItem('cpc_token');
    return this._http.get('api/formularios/proceso?token='+token)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)
  }

  guardar(proceso:Proceso):Observable<ApiResponse>{
    let token = localStorage.getItem('cpc_token');
    return this._http.post('api/procesos/guardar?token='+token,{proceso:proceso})
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)
  }

  eliminar(id:number):Observable<ApiResponse>{
    let token = localStorage.getItem('cpc_token');
    return this._http.delete('api/procesos/eliminar/'+id+'?token='+token)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)
  }

}
