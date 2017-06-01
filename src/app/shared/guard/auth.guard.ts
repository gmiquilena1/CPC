import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(state.url);
        
        if(state.url=='/login' && localStorage.getItem('isLoggedin')){
            this.router.navigate(['/']);
            return false;
        }

        if(state.url=='/login' && !localStorage.getItem('isLoggedin')){            
            return true;
        }
        
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
}