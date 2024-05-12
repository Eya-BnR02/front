import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Altanaql3Component } from './altanaql-3.component';

describe('Altanaql3Component', () => {
  let component: Altanaql3Component;
  let fixture: ComponentFixture<Altanaql3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Altanaql3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Altanaql3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
