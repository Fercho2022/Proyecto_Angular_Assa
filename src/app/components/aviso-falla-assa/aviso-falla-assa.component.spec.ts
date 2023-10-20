import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoFallaAssaComponent } from './aviso-falla-assa.component';

describe('AvisoFallaAssaComponent', () => {
  let component: AvisoFallaAssaComponent;
  let fixture: ComponentFixture<AvisoFallaAssaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisoFallaAssaComponent]
    });
    fixture = TestBed.createComponent(AvisoFallaAssaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
