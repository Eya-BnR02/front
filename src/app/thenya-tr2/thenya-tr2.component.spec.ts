import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThenyaTr2Component } from './thenya-tr2.component';

describe('ThenyaTr2Component', () => {
  let component: ThenyaTr2Component;
  let fixture: ComponentFixture<ThenyaTr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThenyaTr2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThenyaTr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
