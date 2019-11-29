import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FullLayoutPageComponent } from 'app/pages/full-layout-page/full-layout-page.component';
const routes = [
    {
        path: '',
        component: FullLayoutPageComponent,
        data: {
            title: 'Full Layout Page'
        },
    }
];
let FullPagesRoutingModule = class FullPagesRoutingModule {
};
FullPagesRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], FullPagesRoutingModule);
export { FullPagesRoutingModule };
//# sourceMappingURL=full-pages-routing.module.js.map