import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OulaTr2Component } from './oula-tr2.component';

describe('OulaTr2Component', () => {
  let component: OulaTr2Component;
  let fixture: ComponentFixture<OulaTr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OulaTr2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OulaTr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
