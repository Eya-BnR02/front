import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlnmwOulaComponent } from './alnmw-oula.component';

describe('AlnmwOulaComponent', () => {
  let component: AlnmwOulaComponent;
  let fixture: ComponentFixture<AlnmwOulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlnmwOulaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlnmwOulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
