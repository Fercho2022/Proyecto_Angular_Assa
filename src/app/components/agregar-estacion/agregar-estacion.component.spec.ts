import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEstacionComponent } from './agregar-estacion.component';

describe('AgregarEstacionComponent', () => {
  let component: AgregarEstacionComponent;
  let fixture: ComponentFixture<AgregarEstacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEstacionComponent]
    });
    fixture = TestBed.createComponent(AgregarEstacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
