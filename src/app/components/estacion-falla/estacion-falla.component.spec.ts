import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionFallaComponent } from './estacion-falla.component';

describe('EstacionFallaComponent', () => {
  let component: EstacionFallaComponent;
  let fixture: ComponentFixture<EstacionFallaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstacionFallaComponent]
    });
    fixture = TestBed.createComponent(EstacionFallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
