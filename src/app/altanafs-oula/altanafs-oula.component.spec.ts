import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltanafsOulaComponent } from './altanafs-oula.component';

describe('AltanafsOulaComponent', () => {
  let component: AltanafsOulaComponent;
  let fixture: ComponentFixture<AltanafsOulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltanafsOulaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltanafsOulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
