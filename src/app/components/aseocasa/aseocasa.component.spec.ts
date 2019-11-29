import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AseocasaComponent } from './aseocasa.component';

describe('AseocasaComponent', () => {
  let component: AseocasaComponent;
  let fixture: ComponentFixture<AseocasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AseocasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AseocasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
