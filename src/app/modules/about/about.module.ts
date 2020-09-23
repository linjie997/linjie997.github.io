import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AboutRoutingModule } from './about-routing.module';
import { AboutPageComponent } from './ui/pages/about-page/about-page.component';
import { SkillsComponent } from './ui/components/skills/skills.component';
import { SelfPresentationComponent } from './ui/components/self-presentation/self-presentation.component';


@NgModule({
  declarations: [
    AboutPageComponent,
    SkillsComponent,
    SelfPresentationComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
  ],
})
export class AboutModule { }
