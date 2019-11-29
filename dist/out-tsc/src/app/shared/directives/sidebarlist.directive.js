import * as tslib_1 from "tslib";
import { Directive } from "@angular/core";
let SidebarListDirective = class SidebarListDirective {
    constructor() {
        this.navlinks = [];
        this.activeLinks = [];
    }
    setList(list) {
        this.navlinks = list;
    }
    collapse(link) {
        link.open = false;
        this.setIsHidden(link);
        if (link.level.toString().trim() === "2") {
            this.activeLinks.push(this.navlinks
                .filter(_ => _.level.toString().trim() === "1" && _.open === true)[0].title);
        }
        link.toggleEmit.emit(this.activeLinks);
    }
    expand(link) {
        link.open = true;
        this.activeLinks.push(link.title);
        this.collapseOtherLinks(link);
        this.setIsShown(link);
        link.toggleEmit.emit(this.activeLinks);
    }
    toggleActiveList(openLink) {
        this.navlinks
            .filter(_ => _.level.toString().trim() === "3")
            .forEach((link) => {
            if (link !== openLink) {
                link.active = false;
            }
        });
    }
    collapseOtherLinks(openLink) {
        if (openLink.level.toString().trim() === "1") {
            this.navlinks
                .filter(_ => (_.level.toString().trim() === openLink.level.toString().trim() ||
                _.level.toString().trim() === "2") &&
                _.open === true)
                .forEach((link) => {
                if (link !== openLink) {
                    link.open = false;
                    this.setIsHidden(link);
                }
            });
        }
        else if (openLink.level.toString().trim() === "2") {
            this.activeLinks.push(this.navlinks
                .filter(_ => _.level.toString().trim() === "1" && _.open === true)[0].title);
            this.navlinks
                .filter(_ => _.level.toString().trim() === openLink.level.toString().trim() &&
                _.parent === openLink.parent &&
                _.open === true)
                .forEach((link) => {
                if (link !== openLink) {
                    link.open = false;
                    this.setIsHidden(link);
                }
            });
        }
    }
    setIsShown(parentLink) {
        const childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(_ => _.level.toString().trim() === childLevel.toString().trim() &&
            _.parent === parentLink.title)
            .forEach((link) => {
            link.isShown = true;
            link.isHidden = false;
        });
    }
    setIsHidden(parentLink) {
        const childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(_ => _.level.toString().trim() === childLevel.toString().trim() &&
            _.parent === parentLink.title)
            .forEach((link) => {
            link.isShown = false;
            link.isHidden = true;
        });
    }
};
SidebarListDirective = tslib_1.__decorate([
    Directive({ selector: "[appSidebarList]" })
], SidebarListDirective);
export { SidebarListDirective };
//# sourceMappingURL=sidebarlist.directive.js.map