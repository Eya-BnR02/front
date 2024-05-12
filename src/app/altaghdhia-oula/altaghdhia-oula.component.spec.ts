import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaghdhiaOulaComponent } from './altaghdhia-oula.component';

describe('AltaghdhiaOulaComponent', () => {
  let component: AltaghdhiaOulaComponent;
  let fixture: ComponentFixture<AltaghdhiaOulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltaghdhiaOulaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltaghdhiaOulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
