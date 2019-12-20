import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root',
})
export class LoggedGuard implements CanActivate {
  constructor(
    private token: TokenService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!!this.token.getToken()) {
      return true;
    } else {
      this.snackBar.open('Usuario não autenticado, realize o login novamente');
      this.router.navigateByUrl('login');
      return false;
    }
  }
}
