import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoFallaComponent } from './equipo-falla.component';

describe('EquipoFallaComponent', () => {
  let component: EquipoFallaComponent;
  let fixture: ComponentFixture<EquipoFallaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipoFallaComponent]
    });
    fixture = TestBed.createComponent(EquipoFallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
