import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {WorkExperience} from '../../../../../models';
import {WorkExperiencesService} from '../../../../../services/work-experiences-service/work-experiences.service';

@Component({
  selector: 'app-work-experiences-page',
  templateUrl: './work-experiences-page.component.html',
  styleUrls: ['./work-experiences-page.component.scss']
})
export class WorkExperiencesPageComponent implements OnInit {

  workExperiences$: Observable<WorkExperience[]>;

  constructor(
    private workExperiencesService: WorkExperiencesService
  ) {
  }

  ngOnInit(): void {
    this.workExperiences$ = this.workExperiencesService.workExperiences$;
  }

}
