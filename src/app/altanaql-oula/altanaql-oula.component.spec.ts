import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltanaqlOulaComponent } from './altanaql-oula.component';

describe('AltanaqlOulaComponent', () => {
  let component: AltanaqlOulaComponent;
  let fixture: ComponentFixture<AltanaqlOulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltanaqlOulaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltanaqlOulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
