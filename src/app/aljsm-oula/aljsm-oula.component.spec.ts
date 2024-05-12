import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AljsmOulaComponent } from './aljsm-oula.component';

describe('AljsmOulaComponent', () => {
  let component: AljsmOulaComponent;
  let fixture: ComponentFixture<AljsmOulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AljsmOulaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AljsmOulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
