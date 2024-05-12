import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Altanafs2Component } from './altanafs-2.component';

describe('Altanafs2Component', () => {
  let component: Altanafs2Component;
  let fixture: ComponentFixture<Altanafs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Altanafs2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Altanafs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
