import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThenyaTr3Component } from './thenya-tr3.component';

describe('ThenyaTr3Component', () => {
  let component: ThenyaTr3Component;
  let fixture: ComponentFixture<ThenyaTr3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThenyaTr3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThenyaTr3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
