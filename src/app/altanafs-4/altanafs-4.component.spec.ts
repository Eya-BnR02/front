import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Altanafs4Component } from './altanafs-4.component';

describe('Altanafs4Component', () => {
  let component: Altanafs4Component;
  let fixture: ComponentFixture<Altanafs4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Altanafs4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Altanafs4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
