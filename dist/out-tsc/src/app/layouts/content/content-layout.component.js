import * as tslib_1 from "tslib";
import { Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';
import { ConfigService } from 'app/shared/services/config.service';
import { DOCUMENT } from '@angular/common';
let ContentLayoutComponent = class ContentLayoutComponent {
    constructor(configService, document, renderer) {
        this.configService = configService;
        this.document = document;
        this.renderer = renderer;
        this.config = {};
    }
    ngOnInit() {
        this.config = this.configService.templateConf;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (this.config.layout.dir) {
                this.direction = this.config.layout.dir;
            }
            if (this.config.layout.variant === "Dark") {
                this.renderer.addClass(this.document.body, 'layout-dark');
            }
            else if (this.config.layout.variant === "Transparent") {
                this.renderer.addClass(this.document.body, 'layout-dark');
                this.renderer.addClass(this.document.body, 'layout-transparent');
                if (this.config.layout.sidebar.backgroundColor) {
                    this.renderer.addClass(this.document.body, this.config.layout.sidebar.backgroundColor);
                }
                else {
                    this.renderer.addClass(this.document.body, 'bg-glass-1');
                }
            }
        }, 0);
    }
};
tslib_1.__decorate([
    ViewChild('content-wrapper', { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], ContentLayoutComponent.prototype, "wrapper", void 0);
ContentLayoutComponent = tslib_1.__decorate([
    Component({
        selector: 'app-content-layout',
        templateUrl: './content-layout.component.html',
        styleUrls: ['./content-layout.component.scss']
    }),
    tslib_1.__param(1, Inject(DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [ConfigService,
        Document,
        Renderer2])
], ContentLayoutComponent);
export { ContentLayoutComponent };
//# sourceMappingURL=content-layout.component.js.map