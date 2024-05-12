import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThelthaTr2Component } from './theltha-tr2.component';

describe('ThelthaTr2Component', () => {
  let component: ThelthaTr2Component;
  let fixture: ComponentFixture<ThelthaTr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThelthaTr2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThelthaTr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
