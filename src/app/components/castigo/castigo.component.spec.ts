import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastigoComponent } from './castigo.component';

describe('CastigoComponent', () => {
  let component: CastigoComponent;
  let fixture: ComponentFixture<CastigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
