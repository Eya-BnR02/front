import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Altaqa6Component } from './altaqa-6.component';

describe('Altaqa6Component', () => {
  let component: Altaqa6Component;
  let fixture: ComponentFixture<Altaqa6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Altaqa6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Altaqa6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
