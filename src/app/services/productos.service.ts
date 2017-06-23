import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { HttpResponseHandlers } from '../helpers/http';
import { Producto,DataFormProducto,ApiResponse } from '../helpers/models'

@Injectable()
export class ProductosService {

  constructor(private _http: Http) { }

  listAll():Observable<Producto[]>{
    let token = localStorage.getItem('cpc_token');
    return this._http.get('api/productos?token='+token)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)    
  }

  buscar(id:number):Observable<Producto>{
    let token = localStorage.getItem('cpc_token');
    return this._http.get('api/productos/buscar/'+id+'?token='+token)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)    
  }

  dataForm():Observable<DataFormProducto>{
    let token = localStorage.getItem('cpc_token');
    return this._http.get('api/formularios/producto?token='+token)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)
  }

  codigoNuevo(sub_tipo_id):Observable<ApiResponse>{
    let token = localStorage.getItem('cpc_token');
    return this._http.get('api/productos/codigo-nuevo/'+sub_tipo_id+'?token='+token)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)   
  }

  guardar(producto:Producto):Observable<ApiResponse>{
    let token = localStorage.getItem('cpc_token');
    return this._http.post('api/productos/guardar?token='+token,{producto:producto})
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)
  }

  eliminar(id:number):Observable<ApiResponse>{
    let token = localStorage.getItem('cpc_token');
    return this._http.delete('api/productos/eliminar/'+id+'?token='+token)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)
  }

}
