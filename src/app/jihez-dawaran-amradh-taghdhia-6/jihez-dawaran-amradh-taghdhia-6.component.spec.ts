import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JihezDawaranAmradhTaghdhia6Component } from './jihez-dawaran-amradh-taghdhia-6.component';

describe('JihezDawaranAmradhTaghdhia6Component', () => {
  let component: JihezDawaranAmradhTaghdhia6Component;
  let fixture: ComponentFixture<JihezDawaranAmradhTaghdhia6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JihezDawaranAmradhTaghdhia6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JihezDawaranAmradhTaghdhia6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
