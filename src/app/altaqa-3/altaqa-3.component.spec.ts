import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Altaqa3Component } from './altaqa-3.component';

describe('Altaqa3Component', () => {
  let component: Altaqa3Component;
  let fixture: ComponentFixture<Altaqa3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Altaqa3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Altaqa3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
