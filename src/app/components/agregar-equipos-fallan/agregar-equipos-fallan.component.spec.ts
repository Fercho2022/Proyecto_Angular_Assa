import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEquiposFallanComponent } from './agregar-equipos-fallan.component';

describe('AgregarEquiposFallanComponent', () => {
  let component: AgregarEquiposFallanComponent;
  let fixture: ComponentFixture<AgregarEquiposFallanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEquiposFallanComponent]
    });
    fixture = TestBed.createComponent(AgregarEquiposFallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
