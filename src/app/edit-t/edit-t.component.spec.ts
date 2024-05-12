import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTComponent } from './edit-t.component';

describe('EditTComponent', () => {
  let component: EditTComponent;
  let fixture: ComponentFixture<EditTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
