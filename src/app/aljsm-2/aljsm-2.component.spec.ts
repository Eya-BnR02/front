import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aljsm2Component } from './aljsm-2.component';

describe('Aljsm2Component', () => {
  let component: Aljsm2Component;
  let fixture: ComponentFixture<Aljsm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Aljsm2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Aljsm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
