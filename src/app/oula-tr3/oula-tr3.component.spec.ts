import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OulaTr3Component } from './oula-tr3.component';

describe('OulaTr3Component', () => {
  let component: OulaTr3Component;
  let fixture: ComponentFixture<OulaTr3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OulaTr3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OulaTr3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
