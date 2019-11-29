import * as tslib_1 from "tslib";
import { Directive, HostListener, Inject } from '@angular/core';
import { SidebarLinkDirective } from "./sidebarlink.directive";
let SidebarAnchorToggleDirective = class SidebarAnchorToggleDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick() {
        this.navlink.toggle();
    }
};
tslib_1.__decorate([
    HostListener("click", ["$event"]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], SidebarAnchorToggleDirective.prototype, "onClick", null);
SidebarAnchorToggleDirective = tslib_1.__decorate([
    Directive({
        selector: "[appSidebarAnchorToggle]"
    }),
    tslib_1.__param(0, Inject(SidebarLinkDirective)),
    tslib_1.__metadata("design:paramtypes", [SidebarLinkDirective])
], SidebarAnchorToggleDirective);
export { SidebarAnchorToggleDirective };
//# sourceMappingURL=sidebaranchortoggle.directive.js.map