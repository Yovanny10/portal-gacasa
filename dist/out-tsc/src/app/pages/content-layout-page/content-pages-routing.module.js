import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from 'app/pages/content-layout-page/login/login.component';
const routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Login'
        },
    }
];
let ContentPagesRoutingModule = class ContentPagesRoutingModule {
};
ContentPagesRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ContentPagesRoutingModule);
export { ContentPagesRoutingModule };
//# sourceMappingURL=content-pages-routing.module.js.map