import { async, TestBed } from '@angular/core/testing';
import { AseogeneralComponent } from './aseogeneral.component';
describe('AseogeneralComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AseogeneralComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AseogeneralComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=aseogeneral.component.spec.js.map