import { Pipe, PipeTransform } from '@angular/core';
import { TranslatorService } from '../../../services/translator-service/translator.service';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {

  constructor(private translator: TranslatorService) {
  }

  transform(value: string, language?: string): string {
    return this.translator.getString(value, language);
  }
}
