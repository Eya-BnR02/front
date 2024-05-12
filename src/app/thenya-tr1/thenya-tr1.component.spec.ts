import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThenyaTr1Component } from './thenya-tr1.component';

describe('ThenyaTr1Component', () => {
  let component: ThenyaTr1Component;
  let fixture: ComponentFixture<ThenyaTr1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThenyaTr1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThenyaTr1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
