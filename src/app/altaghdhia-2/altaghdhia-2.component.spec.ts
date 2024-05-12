import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Altaghdhia2Component } from './altaghdhia-2.component';

describe('Altaghdhia2Component', () => {
  let component: Altaghdhia2Component;
  let fixture: ComponentFixture<Altaghdhia2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Altaghdhia2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Altaghdhia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
