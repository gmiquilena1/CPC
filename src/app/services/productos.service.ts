import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { HttpResponse } from './http-response';
import { Producto } from '../shared/interfaces'

@Injectable()
export class ProductosService {

  token: string;

  constructor(private _http: Http) {
    this.token = localStorage.getItem('cpc_token');
   }

  getProductos():Observable<Producto[]>{
    return this._http.get('http://localhost/CPC2/public/api/productos?token='+this.token)
    .map(HttpResponse.extractData)
    .catch(HttpResponse.handleError)    
  }

}
