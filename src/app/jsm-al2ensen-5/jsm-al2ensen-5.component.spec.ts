import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsmAl2ensen5Component } from './jsm-al2ensen-5.component';

describe('JsmAl2ensen5Component', () => {
  let component: JsmAl2ensen5Component;
  let fixture: ComponentFixture<JsmAl2ensen5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsmAl2ensen5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsmAl2ensen5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
