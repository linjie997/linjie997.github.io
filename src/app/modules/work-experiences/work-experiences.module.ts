import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WorkExperiencesPageComponent } from './ui/pages/work-experiences-page/work-experiences-page.component';
import { WorkExperiencesRoutingModule } from './work-experiences-routing.module';


@NgModule({
  declarations: [
    WorkExperiencesPageComponent,
  ],
  imports: [
    CommonModule,
    WorkExperiencesRoutingModule,
  ],
})
export class WorkExperiencesModule {
}
