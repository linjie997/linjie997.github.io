import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Skill } from '../../modules/shared/models/skill';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  getSkillsList(): Observable<Skill[]> {
    return this.http.get(`/assets/skills.json`).pipe(
      map(response => response as Skill[]),
    );
  }
}
