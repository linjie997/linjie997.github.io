import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../services/theme-service/theme.service';

@Component({
  selector: 'app-toolbar-settings-menu',
  templateUrl: './toolbar-settings-menu.component.html',
  styleUrls: ['./toolbar-settings-menu.component.scss'],
})
export class ToolbarSettingsMenuComponent implements OnInit {
  
  isDarkThemeEnabled: boolean;
  
  constructor(
    private themeService: ThemeService,
  ) {
    this.isDarkThemeEnabled = this.themeService.checkDarkThemeEnabled();
  }
  
  ngOnInit() {
  }
  
  themeToggle() {
    this.themeService.changeTheme();
  }
}
