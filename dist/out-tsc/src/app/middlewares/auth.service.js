import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../app/pages/content-layout-page/login/login.service';
let AuthService = class AuthService {
    constructor(router, loginServices) {
        this.router = router;
        this.loginServices = loginServices;
    }
    canActivate() {
        if (this.loginServices.estaLogueado()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            sessionStorage.clear();
            return false;
        }
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        LoginService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map