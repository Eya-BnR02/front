import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmaddaOulaComponent } from './almadda-oula.component';

describe('AlmaddaOulaComponent', () => {
  let component: AlmaddaOulaComponent;
  let fixture: ComponentFixture<AlmaddaOulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlmaddaOulaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlmaddaOulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});







