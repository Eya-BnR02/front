import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Altakather3Component } from './altakather-3.component';

describe('Altakather3Component', () => {
  let component: Altakather3Component;
  let fixture: ComponentFixture<Altakather3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Altakather3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Altakather3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
