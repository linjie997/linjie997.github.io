import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperiencesPageComponent } from './work-experiences-page.component';

describe('WorkExperiencesPageComponent', () => {
  let component: WorkExperiencesPageComponent;
  let fixture: ComponentFixture<WorkExperiencesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperiencesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperiencesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
