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
    return this._http.get('api/procesos')
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)    
  }

  buscar(id:number):Observable<Proceso>{
    return this._http.get('api/procesos/buscar/'+id)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)    
  }

  dataForm():Observable<DataFormProceso>{
    return this._http.get('api/formularios/proceso')
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)
  }

  guardar(proceso:Proceso):Observable<ApiResponse>{
    return this._http.post('api/procesos/guardar',{proceso:proceso})
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)
  }

  eliminar(id:number):Observable<ApiResponse>{
    return this._http.delete('api/procesos/eliminar/'+id)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)
  }

}
