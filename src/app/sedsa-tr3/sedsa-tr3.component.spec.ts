import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedsaTr3Component } from './sedsa-tr3.component';

describe('SedsaTr3Component', () => {
  let component: SedsaTr3Component;
  let fixture: ComponentFixture<SedsaTr3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SedsaTr3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SedsaTr3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
