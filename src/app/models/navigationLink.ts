import { Route } from '@angular/router';

export interface NavigationLink extends Route {
  name?: string;
  icon?: string;
}
