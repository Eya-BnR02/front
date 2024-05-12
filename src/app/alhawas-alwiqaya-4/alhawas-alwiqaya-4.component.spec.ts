import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlhawasAlwiqaya4Component } from './alhawas-alwiqaya-4.component';

describe('AlhawasAlwiqaya4Component', () => {
  let component: AlhawasAlwiqaya4Component;
  let fixture: ComponentFixture<AlhawasAlwiqaya4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlhawasAlwiqaya4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlhawasAlwiqaya4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
