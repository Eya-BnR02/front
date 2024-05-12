import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedsaTr1Component } from './sedsa-tr1.component';

describe('SedsaTr1Component', () => {
  let component: SedsaTr1Component;
  let fixture: ComponentFixture<SedsaTr1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SedsaTr1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SedsaTr1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
