import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavigationMenuComponent } from './ui/components/side-navigation-menu/side-navigation-menu.component';
import { ToolbarSettingsMenuComponent } from './ui/components/toolbar-settings-menu/toolbar-settings-menu.component';
import { ToolbarComponent } from './ui/components/toolbar/toolbar.component';
import { IndexComponent } from './ui/pages/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SideNavigationMenuComponent,
    ToolbarComponent,
    ToolbarSettingsMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatTooltipModule,
    MatToolbarModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
