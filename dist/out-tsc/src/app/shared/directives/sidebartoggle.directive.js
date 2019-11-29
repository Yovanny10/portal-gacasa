import * as tslib_1 from "tslib";
import { Directive, HostBinding, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';
let SidebarToggleDirective = class SidebarToggleDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this._dataToggle = "expanded";
        this._toggleRight = true;
        this._toggleLeft = false;
        this.fireRefreshEventOnWindow = function () {
            const evt = document.createEvent("HTMLEvents");
            evt.initEvent("resize", true, false);
            window.dispatchEvent(evt);
        };
    }
    get dataToggle() {
        return this._dataToggle;
    }
    set dataToggle(value) {
        this._dataToggle = value;
    }
    get toggleRight() {
        return this._toggleRight;
    }
    set toggleRight(value) {
        this._toggleRight = value;
    }
    get toggleLeft() {
        return this._toggleLeft;
    }
    set toggleLeft(value) {
        this._toggleLeft = value;
    }
    ngAfterViewInit() {
        this.$wrapper = document.getElementsByClassName("wrapper")[0];
        this.compact_menu_checkbox = this.$wrapper.querySelector('.cz-compact-menu');
    }
    onClick(e) {
        if (this.dataToggle === "expanded") {
            this.dataToggle = "collapsed";
            this.renderer.addClass(this.$wrapper, 'nav-collapsed');
            if (this.compact_menu_checkbox) {
                this.compact_menu_checkbox.checked = true;
            }
        }
        else {
            this.dataToggle = "expanded";
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            if (this.compact_menu_checkbox) {
                this.compact_menu_checkbox.checked = false;
            }
        }
        this.toggleLeft = !this.toggleLeft;
        this.toggleRight = !this.toggleRight;
        setTimeout(() => {
            this.fireRefreshEventOnWindow();
        }, 300);
    }
};
tslib_1.__decorate([
    HostBinding("attr.data-toggle"),
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], SidebarToggleDirective.prototype, "dataToggle", null);
tslib_1.__decorate([
    HostBinding("class.ft-toggle-right"),
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], SidebarToggleDirective.prototype, "toggleRight", null);
tslib_1.__decorate([
    HostBinding("class.ft-toggle-left"),
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], SidebarToggleDirective.prototype, "toggleLeft", null);
tslib_1.__decorate([
    HostListener("click", ["$event"]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SidebarToggleDirective.prototype, "onClick", null);
SidebarToggleDirective = tslib_1.__decorate([
    Directive({ selector: "[appSidebarToggle]" }),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        Renderer2])
], SidebarToggleDirective);
export { SidebarToggleDirective };
//# sourceMappingURL=sidebartoggle.directive.js.map