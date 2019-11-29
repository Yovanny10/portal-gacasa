import * as tslib_1 from "tslib";
import { Directive, Input, Inject, HostBinding, Output, EventEmitter, ElementRef } from "@angular/core";
import { SidebarListDirective } from "./sidebarlist.directive";
import { SidebarDirective } from "./sidebar.directive";
let SidebarLinkDirective = class SidebarLinkDirective {
    constructor(sidebarList, sidebar, el) {
        this.el = el;
        this.toggleEmit = new EventEmitter();
        this.sidebarList = sidebarList;
        this.sidebar = sidebar;
    }
    get open() {
        return this._open;
    }
    set open(value) {
        this._open = value;
    }
    get navCollapsedOpen() {
        return this._navCollapsedOpen;
    }
    set navCollapsedOpen(value) {
        this._navCollapsedOpen = value;
    }
    get active() {
        return this._active;
    }
    set active(value) {
        this._active = value;
    }
    get isShown() {
        return this._isShown;
    }
    set isShown(value) {
        this._isShown = value;
    }
    get isHidden() {
        return this._isHidden;
    }
    set isHidden(value) {
        this._isHidden = value;
    }
    ngOnInit() {
        this.sidebar.addLink(this);
    }
    toggle() {
        this.sidebarList.activeLinks = [];
        this.sidebarList.setList(this.sidebar.getLinks());
        const classList = this.el.nativeElement.classList;
        if (this.level.toString().trim() === "3") {
            this.active = true;
            this.sidebarList.toggleActiveList(this);
            this.sidebar.hideSidebar();
        }
        if (this.level.toString().trim() === "1" && !classList.contains("has-sub")) {
            this.sidebarList.collapseOtherLinks(this);
        }
        if (classList.contains("has-sub") && classList.contains("open")) {
            this.sidebarList.collapse(this);
        }
        else {
            if (classList.contains("has-sub")) {
                this.sidebarList.expand(this);
            }
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], SidebarLinkDirective.prototype, "level", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SidebarLinkDirective.prototype, "classes", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SidebarLinkDirective.prototype, "parent", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SidebarLinkDirective.prototype, "title", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SidebarLinkDirective.prototype, "routePath", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SidebarLinkDirective.prototype, "toggleEmit", void 0);
tslib_1.__decorate([
    HostBinding("class.open"),
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], SidebarLinkDirective.prototype, "open", null);
tslib_1.__decorate([
    HostBinding("class.nav-collapsed-open"),
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], SidebarLinkDirective.prototype, "navCollapsedOpen", null);
tslib_1.__decorate([
    HostBinding("class.active"),
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], SidebarLinkDirective.prototype, "active", null);
tslib_1.__decorate([
    HostBinding("class.is-shown"),
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], SidebarLinkDirective.prototype, "isShown", null);
tslib_1.__decorate([
    HostBinding("class.is-hidden"),
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], SidebarLinkDirective.prototype, "isHidden", null);
SidebarLinkDirective = tslib_1.__decorate([
    Directive({ selector: "[appSidebarlink]" }),
    tslib_1.__param(0, Inject(SidebarListDirective)),
    tslib_1.__param(1, Inject(SidebarDirective)),
    tslib_1.__metadata("design:paramtypes", [SidebarListDirective,
        SidebarDirective,
        ElementRef])
], SidebarLinkDirective);
export { SidebarLinkDirective };
//# sourceMappingURL=sidebarlink.directive.js.map