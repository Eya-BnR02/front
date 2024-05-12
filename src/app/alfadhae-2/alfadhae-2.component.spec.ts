import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alfadhae2Component } from './alfadhae-2.component';

describe('Alfadhae2Component', () => {
  let component: Alfadhae2Component;
  let fixture: ComponentFixture<Alfadhae2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Alfadhae2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Alfadhae2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
