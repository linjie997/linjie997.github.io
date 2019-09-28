import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  @ViewChild(MatSidenav, {static: true}) matSideNav: MatSidenav;
  
  private readonly matches = [
    Breakpoints.Handset,
    Breakpoints.Small,
    Breakpoints.Tablet,
  ];
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(this.matches).pipe(
    map(result => result.matches),
  );
  
  readonly title = 'Jie';
  
  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
  }
}
