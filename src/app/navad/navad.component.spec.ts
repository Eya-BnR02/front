import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavadComponent } from './navad.component';

describe('NavadComponent', () => {
  let component: NavadComponent;
  let fixture: ComponentFixture<NavadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
