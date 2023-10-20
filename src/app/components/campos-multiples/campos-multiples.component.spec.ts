import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamposMultiplesComponent } from './campos-multiples.component';

describe('CamposMultiplesComponent', () => {
  let component: CamposMultiplesComponent;
  let fixture: ComponentFixture<CamposMultiplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CamposMultiplesComponent]
    });
    fixture = TestBed.createComponent(CamposMultiplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
