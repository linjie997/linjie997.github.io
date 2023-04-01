import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../../shared/models/skill';
import { SkillsService } from '../../../../../services/skills-service/skills.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit {

  skills: Skill[] = [];

  constructor(
    private readonly skillsService: SkillsService,
  ) {
  }

  ngOnInit(): void {
    this.getSkills();
  }


  private getSkills(): void {
    this.skillsService.getSkillsList().subscribe(skills => {
      this.skills = skills;
    });
  }
}
