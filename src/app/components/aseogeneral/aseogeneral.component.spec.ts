import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AseogeneralComponent } from './aseogeneral.component';

describe('AseogeneralComponent', () => {
  let component: AseogeneralComponent;
  let fixture: ComponentFixture<AseogeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AseogeneralComponent ]
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
