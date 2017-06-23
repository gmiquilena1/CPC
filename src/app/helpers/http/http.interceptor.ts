import { Injectable } from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { environment } from "../../../environments/environment";
import { Router } from '@angular/router';

@Injectable()
export class InterceptedHttp extends Http {
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private _router: Router) {
        super(backend, defaultOptions);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return this.intercept(super.get(url, this.getRequestOptionArgs(options)));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return this.intercept(super.delete(url, this.getRequestOptionArgs(options)));
    }

    private updateUrl(req: string) {
        return environment.origin + req;
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');

        return options;
    }

    private intercept(observable: Observable<Response>): Observable<Response> {
        return observable.catch((err, source) => {
            if (err.status == 401 && this._router.url!="/login") {
                localStorage.removeItem('cpc_user');
                localStorage.removeItem('cpc_token');
                this._router.navigate(['/login']);
                return Observable.empty();
            } else {
                return Observable.throw(err);
            }
        });
    }
}