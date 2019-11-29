import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AseocuartoComponent } from './aseocuarto.component';

describe('AseocuartoComponent', () => {
  let component: AseocuartoComponent;
  let fixture: ComponentFixture<AseocuartoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AseocuartoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AseocuartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
