import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TranslatorService} from '../translator-service/translator.service';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {OpenSourceWork} from '../../models/open-source-work.model';

@Injectable({
  providedIn: 'root'
})
export class OpenSourceWorkService {

  private openSourceWorksSubject$: BehaviorSubject<OpenSourceWork[]> = new BehaviorSubject<OpenSourceWork[]>([]);
  openSourceWorks: Observable<OpenSourceWork[]> = this.openSourceWorksSubject$.asObservable();

  private storedOpenSourceWorkByLanguage: { [key: string]: OpenSourceWork[] } = {};

  constructor(
    private translator: TranslatorService,
    private http: HttpClient
  ) {
    this.translator.language$.subscribe(language => this.handleLanguageChange(language));
  }

  private handleLanguageChange(language: string): void {
    if (this.storedOpenSourceWorkByLanguage[language]) {
      this.openSourceWorksSubject$.next(this.storedOpenSourceWorkByLanguage[language]);
    } else {
      this.getWorkExperiencesByLanguage(language).subscribe((response: OpenSourceWork[]) => {
        this.storedOpenSourceWorkByLanguage[language] = response;
        this.openSourceWorksSubject$.next(response);
      });
    }
  }

  private getWorkExperiencesByLanguage(language: string): Observable<OpenSourceWork[]> {
    return this.http.get(`/assets/open-source-work-${language}.json`).pipe(
      map((response) => (response as OpenSourceWork[]))
    );
  }
}
