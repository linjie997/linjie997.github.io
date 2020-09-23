import { Component, OnInit } from '@angular/core';
import { NavigationLink } from '../../../models';
import { NavigationLinks } from '../../../utils/navigation-links';

@Component({
  selector: 'app-toolbar-navigation-menu',
  templateUrl: './toolbar-navigation-menu.component.html',
  styleUrls: ['./toolbar-navigation-menu.component.scss']
})
export class ToolbarNavigationMenuComponent implements OnInit {

  readonly modules: NavigationLink[] = NavigationLinks;

  constructor() { }

  ngOnInit(): void {
  }

}
