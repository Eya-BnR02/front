import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltakatherZahriAlwassatLbi2i6Component } from './altakather-zahri-alwassat-lbi2i-6.component';

describe('AltakatherZahriAlwassatLbi2i6Component', () => {
  let component: AltakatherZahriAlwassatLbi2i6Component;
  let fixture: ComponentFixture<AltakatherZahriAlwassatLbi2i6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltakatherZahriAlwassatLbi2i6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltakatherZahriAlwassatLbi2i6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
