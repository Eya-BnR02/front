import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThelthaTr1Component } from './theltha-tr1.component';

describe('ThelthaTr1Component', () => {
  let component: ThelthaTr1Component;
  let fixture: ComponentFixture<ThelthaTr1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThelthaTr1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThelthaTr1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
