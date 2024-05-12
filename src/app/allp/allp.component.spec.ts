import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpComponent } from './allp.component';

describe('AllpComponent', () => {
  let component: AllpComponent;
  let fixture: ComponentFixture<AllpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
