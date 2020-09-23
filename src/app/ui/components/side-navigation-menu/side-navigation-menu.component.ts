import { Component, OnInit } from '@angular/core';
import { NavigationLink } from '../../../models';
import { NavigationLinks } from '../../../utils/navigation-links';

@Component({
  selector: 'app-side-navigation-menu',
  templateUrl: './side-navigation-menu.component.html',
  styleUrls: ['./side-navigation-menu.component.scss'],
})
export class SideNavigationMenuComponent implements OnInit {

  readonly modules: NavigationLink[] = NavigationLinks;

  constructor() {
  }

  ngOnInit() {
  }

}
