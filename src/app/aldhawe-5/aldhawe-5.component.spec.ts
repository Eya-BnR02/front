import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aldhawe5Component } from './aldhawe-5.component';

describe('Aldhawe5Component', () => {
  let component: Aldhawe5Component;
  let fixture: ComponentFixture<Aldhawe5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Aldhawe5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Aldhawe5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
