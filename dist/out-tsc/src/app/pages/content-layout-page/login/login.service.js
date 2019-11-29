import * as tslib_1 from "tslib";
import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { environment } from 'environments/environment';
//import { parameter } from 'assets/js/parameter';
import { Buffer } from 'buffer';
import * as CryptoJS from 'crypto-js';
let LoginService = class LoginService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.urlService = environment;
    }
    // Headers
    headersREST() {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        return myHeaders;
    }
    handleError(error) {
        const setError = (error['_body']) ? JSON.parse(error['_body']) : error.statusText;
        const json = {
            Errors: setError,
            Resultado: [],
            EsExitoso: false,
            Status: error.status
        };
        return Observable.throw(json);
    }
    validateUser(dataLogin) {
        const url = 'http://localhost:3000/signin';
        return this.http.post(url, dataLogin, { headers: this.headersREST() })
            .pipe(map(response => {
            return response.json();
        }), pipe(catchError(this.handleError)));
    }
    login(email, password) {
        return this.http.post(environment.basePath + 'signin', { email, password }, { headers: this.headersREST() })
            .pipe(map(response => {
            return response.json();
        }), pipe(catchError(this.handleError)));
    }
    logout() {
        sessionStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
    cifrarToken(token) {
        token = Buffer.from(token).toString('base64');
        this.token = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(token), CryptoJS.enc.Utf8.parse(this.urlService.keyChiperService), {
            keySize: 256,
            iv: CryptoJS.enc.Utf8.parse(this.urlService.ivChipresService),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        const reponse = {
            nameToken: 'token',
            cifrado: this.token
        };
        return reponse;
    }
    revelarToken(tokenCifrado) {
        const decrypted = CryptoJS.AES.decrypt(tokenCifrado, CryptoJS.enc.Utf8.parse(this.urlService.keyChiperService), {
            keySize: 256,
            iv: CryptoJS.enc.Utf8.parse(this.urlService.ivChipresService),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        const dataDecrypt = Buffer.from(decrypted.toString(CryptoJS.enc.Utf8), 'base64').toString('ascii');
        const response = {
            nameToken: 'token',
            tokenValid: dataDecrypt
        };
        return response;
    }
    estaLogueado() {
        const existToken = sessionStorage.getItem('token');
        if (existToken) {
            const tokenDec = this.revelarToken(this.token);
            if (!tokenDec) {
                Swal.fire({
                    title: 'Cuidado',
                    text: 'Tu token ha sido alterado o modificado, Comunicate con el administrador',
                    //type: 'error',
                    confirmButtonText: 'Aceptar'
                });
            }
            return true;
        }
        return false;
    }
};
LoginService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Http,
        Router])
], LoginService);
export { LoginService };
//# sourceMappingURL=login.service.js.map