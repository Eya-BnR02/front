import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Altanafs3Component } from './altanafs-3.component';

describe('Altanafs3Component', () => {
  let component: Altanafs3Component;
  let fixture: ComponentFixture<Altanafs3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Altanafs3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Altanafs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
