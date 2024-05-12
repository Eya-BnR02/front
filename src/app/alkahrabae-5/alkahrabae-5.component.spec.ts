import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alkahrabae5Component } from './alkahrabae-5.component';

describe('Alkahrabae5Component', () => {
  let component: Alkahrabae5Component;
  let fixture: ComponentFixture<Alkahrabae5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Alkahrabae5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Alkahrabae5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
