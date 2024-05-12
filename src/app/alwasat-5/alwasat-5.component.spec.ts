import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alwasat5Component } from './alwasat-5.component';

describe('Alwasat5Component', () => {
  let component: Alwasat5Component;
  let fixture: ComponentFixture<Alwasat5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Alwasat5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Alwasat5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
