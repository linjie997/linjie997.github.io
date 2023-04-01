import {Component, Input, OnInit} from '@angular/core';
import {WorkExperience} from '../../../../../models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  private _workExperience: WorkExperience;

  get workExperience(): WorkExperience {
    return this._workExperience;
  }

  @Input() set workExperience(workExperience: WorkExperience) {
    this._workExperience = workExperience;
    this.updateDates();
  }

  startDate: Date;
  endDate: Date;

  constructor() {
  }

  ngOnInit(): void {
  }

  private updateDates(): void {
    const [startDate, endDate] = this.workExperience.date;
    this.startDate = startDate;
    this.endDate = endDate;
  }

}
