import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThelthaTr3Component } from './theltha-tr3.component';

describe('ThelthaTr3Component', () => {
  let component: ThelthaTr3Component;
  let fixture: ComponentFixture<ThelthaTr3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThelthaTr3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThelthaTr3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
