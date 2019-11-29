import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, HostListener, NgModule } from '@angular/core';
let MatchHeightDirective = class MatchHeightDirective {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewInit() {
        // call our matchHeight function here
        setTimeout(() => { this.matchHeights(this.el.nativeElement, this.matchHeight); }, 300);
    }
    matchHeights(parent, className) {
        // match height logic here
        if (!parent)
            return;
        // step 1: find all the child elements with the selected class name
        const children = parent.getElementsByClassName(className);
        if (!children)
            return;
        //Pixinvent - Match hight - fix --- comment below code
        Array.from(children).forEach((x) => {
            x.style.height = 'initial';
        });
        // step 2a: get all the child elements heights
        const itemHeights = Array.from(children)
            .map(x => x.getBoundingClientRect().height);
        // step 2b: find out the tallest
        const maxHeight = itemHeights.reduce((prev, curr) => {
            return curr > prev ? curr : prev;
        }, 0);
        // step 3: update all the child elements to the tallest height
        Array.from(children)
            .forEach((x) => x.style.height = `${maxHeight}px`);
    }
    onResize() {
        // call our matchHeight function here
        this.matchHeights(this.el.nativeElement, this.matchHeight);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], MatchHeightDirective.prototype, "matchHeight", void 0);
tslib_1.__decorate([
    HostListener('window:resize'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], MatchHeightDirective.prototype, "onResize", null);
MatchHeightDirective = tslib_1.__decorate([
    Directive({
        selector: '[matchHeight]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], MatchHeightDirective);
export { MatchHeightDirective };
let MatchHeightModule = class MatchHeightModule {
};
MatchHeightModule = tslib_1.__decorate([
    NgModule({
        declarations: [MatchHeightDirective],
        exports: [MatchHeightDirective]
    })
], MatchHeightModule);
export { MatchHeightModule };
//# sourceMappingURL=match-height.directive.js.map