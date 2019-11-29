import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChangeLogComponent } from "./changelog.component";
const routes = [
    {
        path: '',
        component: ChangeLogComponent,
        data: {
            title: 'ChangeLog'
        },
    }
];
let ChangeLogRoutingModule = class ChangeLogRoutingModule {
};
ChangeLogRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ChangeLogRoutingModule);
export { ChangeLogRoutingModule };
//# sourceMappingURL=changelog-routing.module.js.map