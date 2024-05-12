import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Almadda3Component } from './almadda-3.component';

describe('Almadda3Component', () => {
  let component: Almadda3Component;
  let fixture: ComponentFixture<Almadda3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Almadda3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Almadda3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
