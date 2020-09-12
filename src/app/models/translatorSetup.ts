export interface TranslatorSetup {
  strings?: { [key: string]: { [key: string]: string } };
  supportedLanguages: string[];
  displayedLanguages: string[];
  additionalKeyStorage?: string;
}
