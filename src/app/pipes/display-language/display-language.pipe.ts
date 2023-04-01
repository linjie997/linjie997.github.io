import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayLanguage',
})
export class DisplayLanguagePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'it':
        return 'ITA';
      case 'en':
        return 'ENG';
    }
    return value;
  }

}
