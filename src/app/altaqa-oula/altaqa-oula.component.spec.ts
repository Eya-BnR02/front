import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaqaOulaComponent } from './altaqa-oula.component';

describe('AltaqaOulaComponent', () => {
  let component: AltaqaOulaComponent;
  let fixture: ComponentFixture<AltaqaOulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltaqaOulaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltaqaOulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
