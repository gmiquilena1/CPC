import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { HttpResponseHandlers } from 'app/helpers/http';
import { ApiResponse } from 'app/helpers/models'

@Injectable()
export class CargaMasivaService {

    constructor(private _http: Http) { }

    subirArchivo(file: File, params: any): Observable<ApiResponse> {
        let formData: FormData = new FormData();
        formData.append('file', file, file.name);
        //formData.append('parametros', params);
        let headers = new Headers();
        /** No need to include Content-Type in Angular 4 */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        console.log(formData);
        return this._http.post('api/carga_masiva/upload', formData, options)
            .map(HttpResponseHandlers.extractData)
            .catch(HttpResponseHandlers.handleError)
    }

}
