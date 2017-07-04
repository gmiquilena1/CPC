import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { HttpResponseHandlers } from 'app/helpers/http';
import { CentroCosto, DataFormCentroCosto, ApiResponse } from 'app/helpers/models'

@Injectable()
export class CentrosCostosService {

  constructor(private _http: Http) { }

  listAll():Observable<CentroCosto[]>{
    let token = localStorage.getItem('cpc_token');
    return this._http.get('api/ccosto?token='+token)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)    
  }

  dataForm():Observable<DataFormCentroCosto>{
    let token = localStorage.getItem('cpc_token');
    return this._http.get('api/formularios/centro-costo?token='+token)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)
  }

  buscar(id:number):Observable<CentroCosto>{
    let token = localStorage.getItem('cpc_token');
    return this._http.get('api/ccosto/buscar/'+id+'?token='+token)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)    
  }

  guardar(ccosto:CentroCosto):Observable<ApiResponse>{
    let token = localStorage.getItem('cpc_token');
    return this._http.post('api/ccosto/guardar?token='+token,{ccosto:ccosto})
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)
  }

  eliminar(id:number):Observable<ApiResponse>{
    let token = localStorage.getItem('cpc_token');
    return this._http.delete('api/ccosto/eliminar/'+id+'?token='+token)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)
  }  

}
