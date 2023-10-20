import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposEspecificoFallaComponent } from './equipos-especifico-falla.component';

describe('EquiposEspecificoFallaComponent', () => {
  let component: EquiposEspecificoFallaComponent;
  let fixture: ComponentFixture<EquiposEspecificoFallaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquiposEspecificoFallaComponent]
    });
    fixture = TestBed.createComponent(EquiposEspecificoFallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
