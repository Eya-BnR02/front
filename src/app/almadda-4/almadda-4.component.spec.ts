import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Almadda4Component } from './almadda-4.component';

describe('Almadda4Component', () => {
  let component: Almadda4Component;
  let fixture: ComponentFixture<Almadda4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Almadda4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Almadda4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
