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
    return this._http.get('api/productos')
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)    
  }

  buscar(id:number):Observable<Producto>{
    return this._http.get('api/productos/buscar/'+id)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)    
  }

  dataForm():Observable<DataFormProducto>{
    return this._http.get('api/formularios/producto')
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)
  }

  codigoNuevo(sub_tipo_id):Observable<ApiResponse>{
    return this._http.get('api/productos/codigo-nuevo/'+sub_tipo_id)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)   
  }

  guardar(producto:Producto):Observable<ApiResponse>{
    return this._http.post('api/productos/guardar',{producto:producto})
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)
  }

  eliminar(id:number):Observable<ApiResponse>{
    return this._http.delete('api/productos/eliminar/'+id)
    .map(HttpResponseHandlers.extractData)
    .catch(HttpResponseHandlers.handleError)
  }

}
