import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamsaTr1Component } from './khamsa-tr1.component';

describe('KhamsaTr1Component', () => {
  let component: KhamsaTr1Component;
  let fixture: ComponentFixture<KhamsaTr1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KhamsaTr1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KhamsaTr1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
