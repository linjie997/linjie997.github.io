import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalLifePageComponent } from './ui/pages/personal-life-page/personal-life-page.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalLifePageComponent,
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
export class PersonalLifeRoutingModule {
}
