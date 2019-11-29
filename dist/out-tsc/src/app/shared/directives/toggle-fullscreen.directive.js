import * as tslib_1 from "tslib";
import { Directive, HostListener } from '@angular/core';
import * as screenfull from 'screenfull';
let ToggleFullscreenDirective = class ToggleFullscreenDirective {
    onClick() {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    }
};
tslib_1.__decorate([
    HostListener('click'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ToggleFullscreenDirective.prototype, "onClick", null);
ToggleFullscreenDirective = tslib_1.__decorate([
    Directive({
        selector: '[appToggleFullscreen]'
    })
], ToggleFullscreenDirective);
export { ToggleFullscreenDirective };
//# sourceMappingURL=toggle-fullscreen.directive.js.map