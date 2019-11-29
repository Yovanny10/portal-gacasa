import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ChangeLogRoutingModule } from "./changelog-routing.module";
import { MatchHeightModule } from "../shared/directives/match-height.directive";
import { ChangeLogComponent } from "./changelog.component";
let ChangeLogModule = class ChangeLogModule {
};
ChangeLogModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            ChangeLogRoutingModule,
            MatchHeightModule
        ],
        exports: [],
        declarations: [ChangeLogComponent],
        providers: [],
    })
], ChangeLogModule);
export { ChangeLogModule };
//# sourceMappingURL=changelog.module.js.map