import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AuthService = class AuthService {
    constructor() { }
    signupUser(email, password) {
        //your code for signing up the new user
    }
    signinUser(email, password) {
        //your code for checking credentials and getting tokens for for signing in user
    }
    logout() {
        this.token = null;
    }
    getToken() {
        return this.token;
    }
    isAuthenticated() {
        // here you can check if user is authenticated or not through his token 
        return true;
    }
};
AuthService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map