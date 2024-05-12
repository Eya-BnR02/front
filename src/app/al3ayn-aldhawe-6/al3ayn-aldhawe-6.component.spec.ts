import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Al3aynAldhawe6Component } from './al3ayn-aldhawe-6.component';
import { beforeEach } from 'node:test';

describe('Al3aynAldhawe6Component', () => {
  let component: Al3aynAldhawe6Component;
  let fixture: ComponentFixture<Al3aynAldhawe6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Al3aynAldhawe6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Al3aynAldhawe6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
