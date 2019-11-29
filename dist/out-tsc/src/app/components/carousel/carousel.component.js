import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HighlightService } from 'app/shared/services/highlight.service';
let CarouselComponent = class CarouselComponent {
    constructor(config, highlightService) {
        this.highlightService = highlightService;
        this.highlighted = false;
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
    }
    ngAfterViewChecked() {
        this.highlightService.highlightAll();
    }
};
CarouselComponent = tslib_1.__decorate([
    Component({
        selector: 'app-carousel',
        templateUrl: './carousel.component.html',
        styleUrls: ['./carousel.component.scss'],
        providers: [NgbCarouselConfig]
    }),
    tslib_1.__metadata("design:paramtypes", [NgbCarouselConfig, HighlightService])
], CarouselComponent);
export { CarouselComponent };
//# sourceMappingURL=carousel.component.js.map