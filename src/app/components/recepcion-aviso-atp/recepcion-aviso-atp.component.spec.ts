import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionAvisoATPComponent } from './recepcion-aviso-atp.component';

describe('RecepcionAvisoATPComponent', () => {
  let component: RecepcionAvisoATPComponent;
  let fixture: ComponentFixture<RecepcionAvisoATPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionAvisoATPComponent]
    });
    fixture = TestBed.createComponent(RecepcionAvisoATPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
