import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rab3aTr2Component } from './rab3a-tr2.component';

describe('Rab3aTr2Component', () => {
  let component: Rab3aTr2Component;
  let fixture: ComponentFixture<Rab3aTr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Rab3aTr2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Rab3aTr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
