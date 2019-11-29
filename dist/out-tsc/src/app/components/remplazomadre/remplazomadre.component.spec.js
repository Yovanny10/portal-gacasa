import { async, TestBed } from '@angular/core/testing';
import { RemplazomadreComponent } from './remplazomadre.component';
describe('RemplazomadreComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RemplazomadreComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(RemplazomadreComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=remplazomadre.component.spec.js.map