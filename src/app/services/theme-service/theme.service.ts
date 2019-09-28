import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DarkThemeClass } from '../../utils/storageKeys';
import { StoreService } from '../store-service/store.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  
  themeChange = new BehaviorSubject<any>(null);
  
  constructor(
    private overlayContainer: OverlayContainer,
    private store: StoreService,
  ) {
    this.hasDarkThemeSaved();
    if (this.checkDarkThemeEnabled()) {
      this.changeTheme();
    }
  }
  
  changeTheme() {
    if (this.overlayContainer.getContainerElement().classList.contains(DarkThemeClass)) {
      this.overlayContainer.getContainerElement().classList.remove(DarkThemeClass);
      document.body.classList.remove(DarkThemeClass);
      this.store.toggleDarkTheme(false);
    } else {
      this.overlayContainer.getContainerElement().classList.add(DarkThemeClass);
      document.body.classList.add(DarkThemeClass);
      this.store.toggleDarkTheme(true);
    }
    this.themeChange.next(null);
  }
  
  checkDarkThemeEnabled(): boolean {
    return this.store.checkDarkThemeEnabled();
  }
  
  private hasDarkThemeSaved(): boolean {
    const themeSaved = this.store.hasDarkThemeSaved();
    if (!themeSaved) {
      this.checkUserPlatformColorSchemePreferences();
    }
    return themeSaved;
  }
  
  private checkUserPlatformColorSchemePreferences() {
    if (matchMedia('(prefers-color-scheme: dark)').matches) {
      this.store.toggleDarkTheme(true);
    }
  }
}
