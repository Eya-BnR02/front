import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwiqayaAmradh3Component } from './alwiqaya-amradh-3.component';

describe('AlwiqayaAmradh3Component', () => {
  let component: AlwiqayaAmradh3Component;
  let fixture: ComponentFixture<AlwiqayaAmradh3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlwiqayaAmradh3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlwiqayaAmradh3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
