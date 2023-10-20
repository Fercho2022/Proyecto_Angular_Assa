import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputSerieComponent } from './imput-serie.component';

describe('ImputSerieComponent', () => {
  let component: ImputSerieComponent;
  let fixture: ComponentFixture<ImputSerieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImputSerieComponent]
    });
    fixture = TestBed.createComponent(ImputSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
