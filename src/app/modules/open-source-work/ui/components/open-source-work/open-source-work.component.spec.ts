import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSourceWorkComponent } from './open-source-work.component';

describe('WorkExperienceComponent', () => {
  let component: OpenSourceWorkComponent;
  let fixture: ComponentFixture<OpenSourceWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenSourceWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSourceWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
