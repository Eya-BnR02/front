import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alhawe2Altanafs6Component } from './alhawe2-altanafs-6.component';

describe('Alhawe2Altanafs6Component', () => {
  let component: Alhawe2Altanafs6Component;
  let fixture: ComponentFixture<Alhawe2Altanafs6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Alhawe2Altanafs6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Alhawe2Altanafs6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
