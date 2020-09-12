import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TranslatorSetup } from '../../models/translator-setup';

@Injectable({
  providedIn: 'root',
})
export class TranslatorService {

  private storeKey = `linjie997.github.io-translator-saved-language`;
  private strings: { [key: string]: any };

  private readonly languages = {
    'it': 'Italiano',
    'en': 'English',
    'fr': 'Français',
    'es': 'Español',
    'de': 'Deutsch',
    'ja': '日本語',
    'zh': '汉语',
    'ar': 'العَرَبِيَّة‎',
  };

  private language: string;
  private langCode: string;

  private supportedLanguages: string[];
  private displayedLanguages: string[];

  private languageSubject$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  language$: Observable<string> = this.languageSubject$.asObservable();

  constructor() {
  }

  setup(setup: TranslatorSetup) {
    if (setup.additionalKeyStorage) {
      this.storeKey += '-' + setup.additionalKeyStorage;
    }
    if (setup.strings) {
      this.strings = setup.strings;
    }
    let defaultLanguage: string;

    const savedLanguage = this.getSavedLanguage();
    if (savedLanguage) {
      defaultLanguage = savedLanguage;
    } else {
      defaultLanguage = 'it-IT';
    }

    this.supportedLanguages = setup.supportedLanguages;
    this.displayedLanguages = setup.displayedLanguages;
    this.setLanguage(defaultLanguage);

    if (!this.strings) {
      console.warn('Translator: it looks like you did not configured strings yet..');
      console.warn('Please configure strings in TranslatorSetup or provide the TranslatorModule with forRoot()');
    }
  }

  addStrings(strings: { [key: string]: any }) {
    this.strings = {...this.strings, ...strings};
  }

  setLanguage(language: string): boolean {
    if (language === this.language) {
      return false;
    } else {
      const langCode = language.substring(0, 2);
      if (this.supportedLanguages.find(l => l === langCode)) {
        this.language = language;
        this.langCode = language.substring(0, 2);
        this.languageSubject$.next(langCode);
        this.saveLanguage(language);
        return true;
      } else {
        return false;
      }
    }
  }

  getString(string: string, language?: string): string {
    const lang: string = language ? language.substring(0, 2) : this.langCode;
    if (this.strings && this.strings[string]) {
      return this.strings[string][lang] ?? this.strings[string]['it'] ?? this.cleanString(string);
    } else {
      return string;
    }
  }

  getLanguageFromCode(code: string): string {
    const langCode = code.substring(0, 2).toLowerCase();
    return this.languages ? this.languages[langCode] : code;
  }

  getDisplayedLanguages(): string[] {
    return this.displayedLanguages;
  }

  private cleanString(string: string): string {
    return this.titleCase(string.replace('_', ' '));
  }

  private titleCase(str: string): string {
    return str.replace(/\b\S/g, t => t.toUpperCase());
  }

  private getSavedLanguage(): string {
    return localStorage.getItem(this.storeKey);
  }

  private saveLanguage(language: string) {
    localStorage.setItem(this.storeKey, language);
  }
}
