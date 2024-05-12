import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamsaTr3Component } from './khamsa-tr3.component';

describe('KhamsaTr3Component', () => {
  let component: KhamsaTr3Component;
  let fixture: ComponentFixture<KhamsaTr3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KhamsaTr3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KhamsaTr3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
