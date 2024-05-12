import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alzaman3Component } from './alzaman-3.component';

describe('Alzaman3Component', () => {
  let component: Alzaman3Component;
  let fixture: ComponentFixture<Alzaman3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Alzaman3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Alzaman3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
