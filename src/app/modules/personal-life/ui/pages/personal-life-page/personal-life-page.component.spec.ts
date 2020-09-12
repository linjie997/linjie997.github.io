import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLifePageComponent } from './personal-life-page.component';

describe('PersonalLifePageComponent', () => {
  let component: PersonalLifePageComponent;
  let fixture: ComponentFixture<PersonalLifePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalLifePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalLifePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
