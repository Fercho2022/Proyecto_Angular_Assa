import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaFinIntervencionComponent } from './fecha-fin-intervencion.component';

describe('FechaFinIntervencionComponent', () => {
  let component: FechaFinIntervencionComponent;
  let fixture: ComponentFixture<FechaFinIntervencionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FechaFinIntervencionComponent]
    });
    fixture = TestBed.createComponent(FechaFinIntervencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
