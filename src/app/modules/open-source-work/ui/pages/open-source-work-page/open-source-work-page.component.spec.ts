import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSourceWorkPageComponent } from './open-source-work-page.component';

describe('WorkExperiencesPageComponent', () => {
  let component: OpenSourceWorkPageComponent;
  let fixture: ComponentFixture<OpenSourceWorkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenSourceWorkPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSourceWorkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
