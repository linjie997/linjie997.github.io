import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkExperiencesPageComponent } from './ui/pages/work-experiences-page/work-experiences-page.component';

const routes: Routes = [
  {
    path: '',
    component: WorkExperiencesPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkExperiencesRoutingModule {
}
