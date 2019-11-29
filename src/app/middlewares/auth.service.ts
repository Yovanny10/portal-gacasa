import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../app/pages/content-layout-page/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(public router: Router,
    public loginServices: LoginService) { }

  canActivate () {
    if (this.loginServices.estaLogueado()) {
      return true;
    } else {
      this.router.navigate(['/login'])
      sessionStorage.clear();
      return false;
    }
  }  
}

