import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Altaghdhia4Component } from './altaghdhia-4.component';

describe('Altaghdhia4Component', () => {
  let component: Altaghdhia4Component;
  let fixture: ComponentFixture<Altaghdhia4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Altaghdhia4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Altaghdhia4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
