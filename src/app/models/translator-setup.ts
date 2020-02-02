export interface TranslatorSetup {
  strings?: { [key: string]: any };
  supportedLanguages: string[];
  displayedLanguages: string[];
  additionalKeyStorage?: string;
}
