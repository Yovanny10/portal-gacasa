import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocinadaComponent } from './cocinada.component';

describe('CocinadaComponent', () => {
  let component: CocinadaComponent;
  let fixture: ComponentFixture<CocinadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocinadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocinadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
