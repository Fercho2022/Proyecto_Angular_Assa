import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervencionComponent } from './intervencion.component';

describe('IntervencionComponent', () => {
  let component: IntervencionComponent;
  let fixture: ComponentFixture<IntervencionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntervencionComponent]
    });
    fixture = TestBed.createComponent(IntervencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
