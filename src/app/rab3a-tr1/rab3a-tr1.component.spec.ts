import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rab3aTr1Component } from './rab3a-tr1.component';

describe('Rab3aTr1Component', () => {
  let component: Rab3aTr1Component;
  let fixture: ComponentFixture<Rab3aTr1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Rab3aTr1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Rab3aTr1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
