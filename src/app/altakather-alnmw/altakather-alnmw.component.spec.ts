import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltakatherAlnmwComponent } from './altakather-alnmw.component';

describe('AltakatherAlnmwComponent', () => {
  let component: AltakatherAlnmwComponent;
  let fixture: ComponentFixture<AltakatherAlnmwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltakatherAlnmwComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltakatherAlnmwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
