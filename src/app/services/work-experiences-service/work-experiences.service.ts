import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {WorkExperience} from '../../models';
import {TranslatorService} from '../translator-service/translator.service';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkExperiencesService {

  private workExperiencesSubject$: BehaviorSubject<WorkExperience[]> = new BehaviorSubject<WorkExperience[]>([]);
  workExperiences$: Observable<WorkExperience[]> = this.workExperiencesSubject$.asObservable();

  private storedWorkExperiencesByLanguage: { [key: string]: WorkExperience[] } = {};

  constructor(
    private translator: TranslatorService,
    private http: HttpClient
  ) {
    this.translator.language$.subscribe(language => this.handleLanguageChange(language));
  }

  private handleLanguageChange(language: string): void {
    if (this.storedWorkExperiencesByLanguage[language]) {
      this.workExperiencesSubject$.next(this.storedWorkExperiencesByLanguage[language]);
    } else {
      this.getWorkExperiencesByLanguage(language).subscribe((response: WorkExperience[]) => {
        this.storedWorkExperiencesByLanguage[language] = response;
        this.workExperiencesSubject$.next(response);
      });
    }
  }

  private getWorkExperiencesByLanguage(language: string): Observable<WorkExperience[]> {
    return this.http.get(`/assets/work-${language}.json`).pipe(
      map((response) => (response as WorkExperience[]))
    );
  }
}
