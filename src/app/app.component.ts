import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, ApplicationRef, ChangeDetectorRef, Component, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { debounceTime, map, take } from 'rxjs/operators';
import { TranslatorSetup } from './models';
import { TranslatorService } from './services/translator-service/translator.service';
import { ToolbarService } from './services/toolbar-service/toolbar.service';
import { AppConfig } from './utils/app-config';
import { strings } from './utils/strings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSidenav, {static: false}) matSideNav: MatSidenav;

  private readonly matches = [
    Breakpoints.Handset,
    Breakpoints.Small,
    Breakpoints.Tablet,
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(this.matches).pipe(
    map(result => result.matches),
  );

  showToolbar$: Observable<boolean> = this.toolbarService.showToolbar$;

  readonly title = 'Jie';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private translator: TranslatorService,
    private toolbarService: ToolbarService,
    private cd: ChangeDetectorRef,
    private applicationRef: ApplicationRef,
    private zone: NgZone,
    private renderer: Renderer2,
  ) {
    const setup: TranslatorSetup = {
      strings: strings,
      supportedLanguages: AppConfig.supportedLanguages,
      displayedLanguages: AppConfig.displayedLanguages,
    };

    this.translator.setup(setup);
  }

  ngOnInit() {
    this.applicationRef.isStable.pipe(
      debounceTime(375),
      take(1),
    ).subscribe(() => {
      const loader = document.getElementById('app-loading');
      if (loader) {
        this.renderer.addClass(loader, 'fade');
        setTimeout(() => {
          this.zone.run(() => {
            this.renderer.removeChild(document.body, loader);
          });
        }, 375);
      }
    });
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  onRouteActivate() {
    const match = this.breakpointObserver.isMatched(this.matches);
    if (match) {
      this.matSideNav?.close();
    }
  }
}
