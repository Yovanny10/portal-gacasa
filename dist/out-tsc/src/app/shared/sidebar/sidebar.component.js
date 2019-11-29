import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef, Renderer2 } from "@angular/core";
import { ROUTES } from './sidebar-routes.config';
import { Router, ActivatedRoute } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { customAnimations } from "../animations/custom-animations";
import { ConfigService } from '../services/config.service';
let SidebarComponent = class SidebarComponent {
    constructor(elementRef, renderer, router, route, translate, configService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.configService = configService;
        this.activeTitles = [];
        this.nav_collapsed_open = false;
        this.logoUrl = 'assets/img/logo.png';
        this.config = {};
        if (this.depth === undefined) {
            this.depth = 0;
            this.expanded = true;
        }
    }
    ngOnInit() {
        this.config = this.configService.templateConf;
        this.menuItems = ROUTES;
        if (this.config.layout.sidebar.backgroundColor === 'white') {
            this.logoUrl = 'assets/img/logo-dark.png';
        }
        else {
            this.logoUrl = 'assets/img/logo.png';
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (this.config.layout.sidebar.collapsed != undefined) {
                if (this.config.layout.sidebar.collapsed === true) {
                    this.expanded = false;
                    this.renderer.addClass(this.toggleIcon.nativeElement, 'ft-toggle-left');
                    this.renderer.removeClass(this.toggleIcon.nativeElement, 'ft-toggle-right');
                    this.nav_collapsed_open = true;
                }
                else if (this.config.layout.sidebar.collapsed === false) {
                    this.expanded = true;
                    this.renderer.removeClass(this.toggleIcon.nativeElement, 'ft-toggle-left');
                    this.renderer.addClass(this.toggleIcon.nativeElement, 'ft-toggle-right');
                    this.nav_collapsed_open = false;
                }
            }
        }, 0);
    }
    toggleSlideInOut() {
        this.expanded = !this.expanded;
    }
    handleToggle(titles) {
        this.activeTitles = titles;
    }
    // NGX Wizard - skip url change
    ngxWizardFunction(path) {
        if (path.indexOf("forms/ngx") !== -1)
            this.router.navigate(["forms/ngx/wizard"], { skipLocationChange: false });
    }
};
tslib_1.__decorate([
    ViewChild('toggleIcon', { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], SidebarComponent.prototype, "toggleIcon", void 0);
SidebarComponent = tslib_1.__decorate([
    Component({
        selector: "app-sidebar",
        templateUrl: "./sidebar.component.html",
        animations: customAnimations
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        Renderer2,
        Router,
        ActivatedRoute,
        TranslateService,
        ConfigService])
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map