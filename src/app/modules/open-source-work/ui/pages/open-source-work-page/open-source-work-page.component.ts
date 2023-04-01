import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {WorkExperience} from '../../../../../models';
import {OpenSourceWorkService} from '../../../../../services/open-source-work-service/work-experiences.service';

@Component({
  selector: 'app-open-source-work-page',
  templateUrl: './open-source-work-page.component.html',
  styleUrls: ['./open-source-work-page.component.scss']
})
export class OpenSourceWorkPageComponent implements OnInit {

  openSourceWork$: Observable<WorkExperience[]>;

  constructor(
    private openSourceWorkService: OpenSourceWorkService
  ) {
  }

  ngOnInit(): void {
    this.openSourceWork$ = this.openSourceWorkService.openSourceWorks;
  }

}
