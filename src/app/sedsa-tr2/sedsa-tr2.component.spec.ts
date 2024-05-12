import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedsaTr2Component } from './sedsa-tr2.component';

describe('SedsaTr2Component', () => {
  let component: SedsaTr2Component;
  let fixture: ComponentFixture<SedsaTr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SedsaTr2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SedsaTr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
