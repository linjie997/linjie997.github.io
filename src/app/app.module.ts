import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { SideNavigationMenuComponent } from './ui/components/side-navigation-menu/side-navigation-menu.component';
import { ToolbarSettingsMenuComponent } from './ui/components/toolbar-settings-menu/toolbar-settings-menu.component';
import { ToolbarComponent } from './ui/components/toolbar/toolbar.component';
import { IndexComponent } from './ui/pages/index/index.component';

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
    TranslatePipe,
    // endregion
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // region Material Modules
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatTooltipModule,
    MatToolbarModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatListModule,
    MatCardModule,
    // endregion

    // region External dependencies
    LazyLoadImageModule,
    //
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
