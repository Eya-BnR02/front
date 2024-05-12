import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfadhaeOulaP1Component } from './alfadhae-oula-p1.component';

describe('AlfadhaeOulaP1Component', () => {
  let component: AlfadhaeOulaP1Component;
  let fixture: ComponentFixture<AlfadhaeOulaP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlfadhaeOulaP1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlfadhaeOulaP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
