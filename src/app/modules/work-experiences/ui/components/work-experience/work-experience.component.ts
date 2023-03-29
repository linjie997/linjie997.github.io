import {Component, Input, OnInit} from '@angular/core';
import {WorkExperience} from '../../../../../models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  @Input() workExperience: WorkExperience;

  constructor() {
  }

  ngOnInit(): void {
  }

}
