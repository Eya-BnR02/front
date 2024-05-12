import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alwasat2Component } from './alwasat-2.component';

describe('Alwasat2Component', () => {
  let component: Alwasat2Component;
  let fixture: ComponentFixture<Alwasat2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Alwasat2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Alwasat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
