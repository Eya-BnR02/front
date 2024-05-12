import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTComponent } from './all-t.component';

describe('AllTComponent', () => {
  let component: AllTComponent;
  let fixture: ComponentFixture<AllTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
