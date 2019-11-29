import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from '../services/layout.service';
import { ConfigService } from '../services/config.service';
let NavbarComponent = class NavbarComponent {
    constructor(translate, layoutService, configService) {
        this.translate = translate;
        this.layoutService = layoutService;
        this.configService = configService;
        this.currentLang = "en";
        this.toggleClass = "ft-maximize";
        this.placement = "bottom-right";
        this.isCollapsed = true;
        this.toggleHideSidebar = new EventEmitter();
        this.config = {};
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : "en");
    }
    ngOnInit() {
        this.config = this.configService.templateConf;
    }
    ngAfterViewInit() {
        if (this.config.layout.dir) {
            const dir = this.config.layout.dir;
            if (dir === "rtl") {
                this.placement = "bottom-left";
            }
            else if (dir === "ltr") {
                this.placement = "bottom-right";
            }
        }
    }
    ChangeLanguage(language) {
        this.translate.use(language);
    }
    ToggleClass() {
        if (this.toggleClass === "ft-maximize") {
            this.toggleClass = "ft-minimize";
        }
        else {
            this.toggleClass = "ft-maximize";
        }
    }
    toggleNotificationSidebar() {
        this.layoutService.emitChange(true);
    }
    toggleSidebar() {
        const appSidebar = document.getElementsByClassName("app-sidebar")[0];
        if (appSidebar.classList.contains("hide-sidebar")) {
            this.toggleHideSidebar.emit(false);
        }
        else {
            this.toggleHideSidebar.emit(true);
        }
    }
};
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], NavbarComponent.prototype, "toggleHideSidebar", void 0);
NavbarComponent = tslib_1.__decorate([
    Component({
        selector: "app-navbar",
        templateUrl: "./navbar.component.html",
        styleUrls: ["./navbar.component.scss"]
    }),
    tslib_1.__metadata("design:paramtypes", [TranslateService, LayoutService, ConfigService])
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map