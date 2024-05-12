import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlzamanOulaComponent } from './alzaman-oula.component';

describe('AlzamanOulaComponent', () => {
  let component: AlzamanOulaComponent;
  let fixture: ComponentFixture<AlzamanOulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlzamanOulaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlzamanOulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
