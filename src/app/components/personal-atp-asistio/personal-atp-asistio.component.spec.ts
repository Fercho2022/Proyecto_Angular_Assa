import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalATPAsistioComponent } from './personal-atp-asistio.component';

describe('PersonalATPAsistioComponent', () => {
  let component: PersonalATPAsistioComponent;
  let fixture: ComponentFixture<PersonalATPAsistioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalATPAsistioComponent]
    });
    fixture = TestBed.createComponent(PersonalATPAsistioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
