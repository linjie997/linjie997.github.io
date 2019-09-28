import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarSettingsMenuComponent } from './toolbar-settings-menu.component';

describe('ToolbarSettingsMenuComponent', () => {
  let component: ToolbarSettingsMenuComponent;
  let fixture: ComponentFixture<ToolbarSettingsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarSettingsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarSettingsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
