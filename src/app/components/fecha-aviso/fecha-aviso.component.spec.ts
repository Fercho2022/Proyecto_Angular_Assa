import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaAvisoComponent } from './fecha-aviso.component';

describe('FechaAvisoComponent', () => {
  let component: FechaAvisoComponent;
  let fixture: ComponentFixture<FechaAvisoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FechaAvisoComponent]
    });
    fixture = TestBed.createComponent(FechaAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
