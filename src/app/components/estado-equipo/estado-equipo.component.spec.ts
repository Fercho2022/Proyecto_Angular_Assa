import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoEquipoComponent } from './estado-equipo.component';

describe('EstadoEquipoComponent', () => {
  let component: EstadoEquipoComponent;
  let fixture: ComponentFixture<EstadoEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoEquipoComponent]
    });
    fixture = TestBed.createComponent(EstadoEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
