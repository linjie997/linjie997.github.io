import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {WorkExperiencesPageComponent} from './ui/pages/work-experiences-page/work-experiences-page.component';
import {WorkExperiencesRoutingModule} from './work-experiences-routing.module';
import {MatChipsModule} from '@angular/material/chips';
import { WorkExperienceComponent } from './ui/components/work-experience/work-experience.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    WorkExperiencesPageComponent,
    WorkExperienceComponent,
  ],
  imports: [
    CommonModule,
    WorkExperiencesRoutingModule,
    MatChipsModule,
    SharedModule
  ],
})
export class WorkExperiencesModule {
}
