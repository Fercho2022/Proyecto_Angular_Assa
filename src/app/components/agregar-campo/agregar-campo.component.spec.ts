import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCampoComponent } from './agregar-campo.component';

describe('AgregarCampoComponent', () => {
  let component: AgregarCampoComponent;
  let fixture: ComponentFixture<AgregarCampoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarCampoComponent]
    });
    fixture = TestBed.createComponent(AgregarCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
