import * as tslib_1 from "tslib";
import Swal from 'sweetalert2';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from "@angular/router";
let LoginComponent = class LoginComponent {
    constructor(loginService, router, route) {
        this.loginService = loginService;
        this.router = router;
        this.route = route;
        this.loading = false;
    }
    ngOnInit() {
    }
    login(userLogin) {
        this.loading = true;
        const formLogin = {
            email: userLogin.form.value.user,
            password: userLogin.form.value.password
        };
        this.loginService.validateUser(formLogin).subscribe(dataFinal => {
            this.loading = true;
            if (dataFinal.token) {
                const tokenCifrado = this.loginService.cifrarToken(dataFinal.token);
                sessionStorage.setItem(tokenCifrado.nameToken, tokenCifrado.cifrado);
                this.router.navigate(['/components/carousel']);
                this.loading = false;
            }
        }, error => {
            console.log(error.toString());
            this.loading = true;
            Swal.fire({
                title: 'Algo ha fallado',
                text: 'Tu usuario/contraseña es incorrecto',
                type: 'warning',
                confirmButtonText: 'Quiero volverlo a intentar'
            });
            this.loading = false;
        });
        this.loading = false;
    }
    loginf(f) {
        console.log(f.value);
    }
};
tslib_1.__decorate([
    ViewChild('userLogin', { static: false }),
    tslib_1.__metadata("design:type", NgForm)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [LoginService,
        Router,
        ActivatedRoute])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map