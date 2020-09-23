import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../../shared/models/skill';
import { SkillsService } from '../../../../shared/services/skills-service/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

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
