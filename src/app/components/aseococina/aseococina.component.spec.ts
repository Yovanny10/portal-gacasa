import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AseococinaComponent } from './aseococina.component';

describe('AseococinaComponent', () => {
  let component: AseococinaComponent;
  let fixture: ComponentFixture<AseococinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AseococinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AseococinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
