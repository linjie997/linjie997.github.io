import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarNavigationMenuComponent } from './toolbar-navigation-menu.component';

describe('ToolbarNavigationMenuComponent', () => {
  let component: ToolbarNavigationMenuComponent;
  let fixture: ComponentFixture<ToolbarNavigationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarNavigationMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarNavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
