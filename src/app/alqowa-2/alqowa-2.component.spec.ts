import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alqowa2Component } from './alqowa-2.component';

describe('Alqowa2Component', () => {
  let component: Alqowa2Component;
  let fixture: ComponentFixture<Alqowa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Alqowa2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Alqowa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
