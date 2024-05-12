import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OulaTr1Component } from './oula-tr1.component';

describe('OulaTr1Component', () => {
  let component: OulaTr1Component;
  let fixture: ComponentFixture<OulaTr1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OulaTr1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OulaTr1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
