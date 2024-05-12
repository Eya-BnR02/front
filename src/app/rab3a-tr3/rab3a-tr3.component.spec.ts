import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rab3aTr3Component } from './rab3a-tr3.component';

describe('Rab3aTr3Component', () => {
  let component: Rab3aTr3Component;
  let fixture: ComponentFixture<Rab3aTr3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Rab3aTr3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Rab3aTr3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
