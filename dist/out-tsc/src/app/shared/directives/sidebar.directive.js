import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener, ChangeDetectorRef, Output, EventEmitter, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
let SidebarDirective = class SidebarDirective {
    constructor(el, renderer, router, cd) {
        this.el = el;
        this.renderer = renderer;
        this.router = router;
        this.cd = cd;
        this.navlinks = [];
        this.activeLinks = [];
        this.toggleHideSidebar = new EventEmitter();
    }
    ngOnInit() {
        this.activeRoute = this.router.url;
        this.innerWidth = window.innerWidth;
    }
    ngAfterViewInit() {
        const element = this.el.nativeElement;
        this.$wrapper = this.renderer.parentNode(this.el.nativeElement); // document.getElementsByClassName("wrapper")[0];
        const $sidebar_img_container = this.el.nativeElement.querySelector('.sidebar-background');
        const $sidebar_img = element.getAttribute("data-image");
        if ($sidebar_img_container.length !== 0 && $sidebar_img !== undefined) {
            this.renderer.setAttribute($sidebar_img_container, 'style', 'background-image: url("' + $sidebar_img + '")');
        }
        if (!this.$wrapper.classList.contains("nav-collapsed")) {
            this.expandActive();
        }
        if (this.innerWidth < 992) {
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.toggleHideSidebar.emit(true);
        }
        this.cd.detectChanges();
    }
    onMouseOver(e) {
        if (this.$wrapper.classList.contains("nav-collapsed")) {
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.navlinks
                .filter(_ => _.navCollapsedOpen === true)
                .forEach((link) => {
                link.open = true;
                link.navCollapsedOpen = false;
            });
        }
    }
    onMouseOut(e) {
        if (this.$wrapper.classList.contains("nav-collapsed")) {
            this.renderer.addClass(this.$wrapper, 'menu-collapsed');
            this.navlinks
                .filter(_ => _.open === true)
                .forEach((link) => {
                link.open = false;
                link.navCollapsedOpen = true;
            });
        }
    }
    onClick(e) {
        if (e.target.parentElement.classList.contains("logo-text") ||
            e.target.parentElement.classList.contains("logo-img")) {
            this.activeLinks = [];
            this.activeRoute = this.router.url;
            this.expandActive();
            this.hideSidebar();
        }
        else if (e.target.parentElement.classList.contains("nav-close") ||
            e.target.classList.contains("nav-close")) {
            this.toggleHideSidebar.emit(true);
        }
    }
    onResize(event) {
        this.innerWidth = window.innerWidth;
        if (event.target.innerWidth < 992) {
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.toggleHideSidebar.emit(true);
        }
        if (event.target.innerWidth > 992) {
            const toggleStatus = this.el.nativeElement;
            this.el.nativeElement.querySelector('.toggle-icon')
                .getAttribute("data-toggle");
            if (toggleStatus === "collapsed" &&
                this.$wrapper.classList.contains("nav-collapsed") &&
                this.$wrapper.classList.contains("menu-collapsed")) {
                this.$wrapper.classList.add("nav-collapsed");
                this.$wrapper.classList.add("menu-collapsed");
            }
            this.toggleHideSidebar.emit(false);
        }
    }
    // check outside click and close sidebar for smaller screen <992
    onOutsideClick(event) {
        if (this.innerWidth < 992) {
            let clickedComponent = event.target;
            let inside = false;
            do {
                if (clickedComponent === this.el.nativeElement) {
                    inside = true;
                }
                clickedComponent = clickedComponent.parentNode;
            } while (clickedComponent);
            if (!this.el.nativeElement.classList.contains("hide-sidebar") &&
                !inside &&
                !event.target.classList.contains("navbar-toggle")) {
                this.toggleHideSidebar.emit(true);
            }
        }
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    getLinks() {
        return this.navlinks;
    }
    hideSidebar() {
        if (this.innerWidth < 992) {
            this.toggleHideSidebar.emit(true);
        }
    }
    expandActive() {
        this.navlinks
            .filter(_ => _.routePath === this.activeRoute)
            .forEach((link) => {
            link.isShown = true;
            if (link.level.toString().trim() === "3") {
                this.navlinks
                    .filter(_ => _.level.toString().trim() === "2" && _.title === link.parent)
                    .forEach((parentLink) => {
                    parentLink.open = true;
                    this.activeLinks.push(parentLink.title);
                    this.navlinks
                        .filter(_ => _.level.toString().trim() === "1" &&
                        _.title === parentLink.parent)
                        .forEach((superParentLink) => {
                        superParentLink.open = true;
                        this.activeLinks.push(superParentLink.title);
                        superParentLink.toggleEmit.emit(this.activeLinks);
                    });
                });
            }
            else if (link.level.toString().trim() === "2") {
                this.navlinks
                    .filter(_ => _.level.toString().trim() === "1" && _.title === link.parent)
                    .forEach((parentLink) => {
                    parentLink.open = true;
                    this.activeLinks.push(parentLink.title);
                    parentLink.toggleEmit.emit(this.activeLinks);
                });
            }
        });
    }
    toggleActiveList() {
        this.navlinks
            .filter(_ => _.level.toString().trim() === "3" && _.routePath !== this.activeRoute)
            .forEach((link) => {
            link.active = false;
        });
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
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SidebarDirective.prototype, "toggleHideSidebar", void 0);
tslib_1.__decorate([
    HostListener("mouseenter", ["$event"]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SidebarDirective.prototype, "onMouseOver", null);
tslib_1.__decorate([
    HostListener("mouseleave", ["$event"]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SidebarDirective.prototype, "onMouseOut", null);
tslib_1.__decorate([
    HostListener("click", ["$event"]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SidebarDirective.prototype, "onClick", null);
tslib_1.__decorate([
    HostListener("window:resize", ["$event"]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SidebarDirective.prototype, "onResize", null);
tslib_1.__decorate([
    HostListener("document:click", ["$event"]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SidebarDirective.prototype, "onOutsideClick", null);
SidebarDirective = tslib_1.__decorate([
    Directive({ selector: "[appSidebar]" }),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        Renderer2,
        Router,
        ChangeDetectorRef])
], SidebarDirective);
export { SidebarDirective };
//# sourceMappingURL=sidebar.directive.js.map