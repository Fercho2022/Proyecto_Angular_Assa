import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoRetiradoInstaladoComponent } from './equipo-retirado-instalado.component';

describe('EquipoRetiradoInstaladoComponent', () => {
  let component: EquipoRetiradoInstaladoComponent;
  let fixture: ComponentFixture<EquipoRetiradoInstaladoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipoRetiradoInstaladoComponent]
    });
    fixture = TestBed.createComponent(EquipoRetiradoInstaladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
