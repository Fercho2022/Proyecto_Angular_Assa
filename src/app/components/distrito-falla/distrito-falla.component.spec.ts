import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistritoFallaComponent } from './distrito-falla.component';

describe('DistritoFallaComponent', () => {
  let component: DistritoFallaComponent;
  let fixture: ComponentFixture<DistritoFallaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistritoFallaComponent]
    });
    fixture = TestBed.createComponent(DistritoFallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
