import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Altanaql4Component } from './altanaql-4.component';

describe('Altanaql4Component', () => {
  let component: Altanaql4Component;
  let fixture: ComponentFixture<Altanaql4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Altanaql4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Altanaql4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
