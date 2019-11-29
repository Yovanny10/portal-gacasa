import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FullPagesRoutingModule } from "./full-pages-routing.module";
import { FullLayoutPageComponent } from './full-layout-page.component';
let FullPagesModule = class FullPagesModule {
};
FullPagesModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FullPagesRoutingModule
        ],
        declarations: [
            FullLayoutPageComponent
        ]
    })
], FullPagesModule);
export { FullPagesModule };
//# sourceMappingURL=full-pages.module.js.map