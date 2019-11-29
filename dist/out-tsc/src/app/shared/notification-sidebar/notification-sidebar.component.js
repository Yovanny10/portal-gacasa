import * as tslib_1 from "tslib";
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { LayoutService } from '../services/layout.service';
let NotificationSidebarComponent = class NotificationSidebarComponent {
    constructor(elRef, renderer, layoutService) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.layoutService = layoutService;
        this.isOpen = false;
        this.layoutSub = layoutService.changeEmitted$.subscribe(value => {
            if (this.isOpen) {
                this.renderer.removeClass(this.sidebar.nativeElement, 'open');
                this.isOpen = false;
            }
            else {
                this.renderer.addClass(this.sidebar.nativeElement, 'open');
                this.isOpen = true;
            }
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    }
    onClose() {
        this.renderer.removeClass(this.sidebar.nativeElement, 'open');
        this.isOpen = false;
    }
};
tslib_1.__decorate([
    ViewChild('sidebar', { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], NotificationSidebarComponent.prototype, "sidebar", void 0);
NotificationSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-notification-sidebar',
        templateUrl: './notification-sidebar.component.html',
        styleUrls: ['./notification-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        Renderer2,
        LayoutService])
], NotificationSidebarComponent);
export { NotificationSidebarComponent };
//# sourceMappingURL=notification-sidebar.component.js.map