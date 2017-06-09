import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {        
        
        if(state.url=='/login' && localStorage.getItem('cpc_token')){
            this.router.navigate(['/']);
            return false;
        }

        if(state.url=='/login' && !localStorage.getItem('cpc_token')){            
            return true;
        }
        
        if (localStorage.getItem('cpc_token')) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
}