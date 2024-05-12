import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Altaghdhia3Component } from './altaghdhia-3.component';

describe('Altaghdhia3Component', () => {
  let component: Altaghdhia3Component;
  let fixture: ComponentFixture<Altaghdhia3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Altaghdhia3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Altaghdhia3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
