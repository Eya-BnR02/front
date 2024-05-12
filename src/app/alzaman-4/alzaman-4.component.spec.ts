import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alzaman4Component } from './alzaman-4.component';

describe('Alzaman4Component', () => {
  let component: Alzaman4Component;
  let fixture: ComponentFixture<Alzaman4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Alzaman4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Alzaman4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
