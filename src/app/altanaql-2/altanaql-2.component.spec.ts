import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Altanaql2Component } from './altanaql-2.component';

describe('Altanaql2Component', () => {
  let component: Altanaql2Component;
  let fixture: ComponentFixture<Altanaql2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Altanaql2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Altanaql2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
