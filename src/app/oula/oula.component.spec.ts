import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OulaComponent } from './oula.component';

describe('OulaComponent', () => {
  let component: OulaComponent;
  let fixture: ComponentFixture<OulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OulaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
