import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {GlobalService} from './global.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor (private localSessionStorage: GlobalService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.localSessionStorage.get('success')) {
      return true;
    } else {
      // this.router.navigate(['login']);
      return true;
    }

  }
}
