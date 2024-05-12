import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alzaman2Component } from './alzaman-2.component';

describe('Alzaman2Component', () => {
  let component: Alzaman2Component;
  let fixture: ComponentFixture<Alzaman2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Alzaman2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Alzaman2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
