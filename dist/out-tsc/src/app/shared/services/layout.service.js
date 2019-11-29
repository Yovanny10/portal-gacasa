import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
let LayoutService = class LayoutService {
    constructor() {
        this.emitChangeSource = new Subject();
        this.changeEmitted$ = this.emitChangeSource.asObservable();
    }
    emitChange(change) {
        this.emitChangeSource.next(change);
    }
};
LayoutService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], LayoutService);
export { LayoutService };
//# sourceMappingURL=layout.service.js.map