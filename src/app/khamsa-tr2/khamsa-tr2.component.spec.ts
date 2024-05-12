import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamsaTr2Component } from './khamsa-tr2.component';

describe('KhamsaTr2Component', () => {
  let component: KhamsaTr2Component;
  let fixture: ComponentFixture<KhamsaTr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KhamsaTr2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KhamsaTr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
