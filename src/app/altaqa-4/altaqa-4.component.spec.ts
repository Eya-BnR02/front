import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Altaqa4Component } from './altaqa-4.component';

describe('Altaqa4Component', () => {
  let component: Altaqa4Component;
  let fixture: ComponentFixture<Altaqa4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Altaqa4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Altaqa4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
