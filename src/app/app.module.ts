import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslatePipe } from './modules/shared/pipes/translate.pipe';
import { SharedModule } from './modules/shared/shared.module';
import { SideNavigationMenuComponent } from './ui/components/side-navigation-menu/side-navigation-menu.component';
import { ToolbarSettingsMenuComponent } from './ui/components/toolbar-settings-menu/toolbar-settings-menu.component';
import { ToolbarComponent } from './ui/components/toolbar/toolbar.component';
import { IndexComponent } from './ui/pages/index/index.component';
import { ToolbarNavigationMenuComponent } from './ui/components/toolbar-navigation-menu/toolbar-navigation-menu.component';
import { ICONS } from './utils/icons';

@NgModule({
  declarations: [
    // region Components
    AppComponent,
    IndexComponent,
    SideNavigationMenuComponent,
    ToolbarComponent,
    ToolbarSettingsMenuComponent,
    // endregion

    // region Pipes
    ToolbarNavigationMenuComponent,
    // endregion
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModule,

    // region Material Modules
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatListModule,
    // endregion

    // region External dependencies
    LazyLoadImageModule,
    //
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
  exports: [
    TranslatePipe,
  ],
})
export class AppModule {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
    ICONS.forEach(icon => {
      const resourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(icon.path);
      this.iconRegistry.addSvgIcon(icon.name, resourceUrl);
    });
  }

}
