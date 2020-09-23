import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DarkThemeClass } from '../../utils/storage-keys';
import { StoreService } from '../store-service/store.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private darkThemeEnabled: boolean;
  private darkThemeSubject = new BehaviorSubject<any>(null);
  darkThemeEnabled$: Observable<boolean> = this.darkThemeSubject.asObservable();

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
      this.darkThemeEnabled = false;
    } else {
      this.overlayContainer.getContainerElement().classList.add(DarkThemeClass);
      document.body.classList.add(DarkThemeClass);
      this.darkThemeEnabled = true;
    }
    this.store.toggleDarkTheme(this.darkThemeEnabled);
    this.darkThemeSubject.next(this.darkThemeEnabled);
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
