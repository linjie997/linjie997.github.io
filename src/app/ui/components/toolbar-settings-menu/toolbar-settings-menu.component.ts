import {Component, OnInit} from '@angular/core';
import {ThemeService} from '../../../services/theme-service/theme.service';
import {Observable} from 'rxjs';
import {TranslatorService} from '../../../services/translator-service/translator.service';

@Component({
  selector: 'app-toolbar-settings-menu',
  templateUrl: './toolbar-settings-menu.component.html',
  styleUrls: ['./toolbar-settings-menu.component.scss'],
})
export class ToolbarSettingsMenuComponent implements OnInit {

  isDarkThemeEnabled: boolean;

  readonly availableLanguages = ['en', 'it'];
  language$: Observable<string> = this.translator.language$;

  constructor(
    private themeService: ThemeService,
    private translator: TranslatorService
  ) {
    this.isDarkThemeEnabled = this.themeService.checkDarkThemeEnabled();
  }

  ngOnInit() {
  }

  themeToggle(): void {
    this.themeService.changeTheme();
  }

  changeLanguage(language: string): void {
    this.translator.setLanguage(language);
  }
}
