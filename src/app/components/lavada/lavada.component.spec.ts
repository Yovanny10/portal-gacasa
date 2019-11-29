import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LavadaComponent } from './lavada.component';

describe('LavadaComponent', () => {
  let component: LavadaComponent;
  let fixture: ComponentFixture<LavadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LavadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
