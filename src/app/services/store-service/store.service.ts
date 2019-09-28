import { Injectable } from '@angular/core';
import { DarkThemeEnabledKey } from '../../utils/storageKeys';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  
  private readonly darkThemeEnabledKey = DarkThemeEnabledKey;
  
  constructor() {
  }
  
  get(key: string) {
    return localStorage.getItem(key);
  }
  
  set(key: string, value: string) {
    if (value) {
      localStorage.setItem(key, value);
    } else {
      localStorage.removeItem(key);
    }
  }
  
  toggleDarkTheme(isEnabled: boolean) {
    if (isEnabled) {
      localStorage.setItem(this.darkThemeEnabledKey, 'true');
    } else {
      localStorage.setItem(this.darkThemeEnabledKey, 'false');
    }
  }
  
  hasDarkThemeSaved(): boolean {
    return localStorage.getItem(this.darkThemeEnabledKey) !== null;
  }
  
  checkDarkThemeEnabled(): boolean {
    const enabled = localStorage.getItem(this.darkThemeEnabledKey);
    return enabled === 'true';
  }
  
  private remove(key: string) {
    localStorage.removeItem(key);
  }
}
