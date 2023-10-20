import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NroIntervencionComponent } from './nro-intervencion.component';

describe('NroIntervencionComponent', () => {
  let component: NroIntervencionComponent;
  let fixture: ComponentFixture<NroIntervencionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NroIntervencionComponent]
    });
    fixture = TestBed.createComponent(NroIntervencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
