import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ConfigService = class ConfigService {
    constructor() {
        this.setConfigValue();
    }
    setConfigValue() {
        this.templateConf = {
            layout: {
                variant: 'Light',
                dir: 'ltr',
                sidebar: {
                    collapsed: false,
                    size: 'sidebar-md',
                    backgroundColor: "man-of-steel",
                    backgroundImage: true,
                    backgroundImageURL: 'assets/img/sidebar-bg/01.jpg'
                }
            }
        };
    }
};
ConfigService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ConfigService);
export { ConfigService };
//# sourceMappingURL=config.service.js.map