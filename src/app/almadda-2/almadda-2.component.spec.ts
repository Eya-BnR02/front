import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Almadda2Component } from './almadda-2.component';

describe('Almadda2Component', () => {
  let component: Almadda2Component;
  let fixture: ComponentFixture<Almadda2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Almadda2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Almadda2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
