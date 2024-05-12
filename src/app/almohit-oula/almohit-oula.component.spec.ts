import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmohitOulaComponent } from './almohit-oula.component';

describe('AlmohitOulaComponent', () => {
  let component: AlmohitOulaComponent;
  let fixture: ComponentFixture<AlmohitOulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlmohitOulaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlmohitOulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
