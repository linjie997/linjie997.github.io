import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenSourceWorkPageComponent } from './ui/pages/open-source-work-page/open-source-work-page.component';

const routes: Routes = [
  {
    path: '',
    component: OpenSourceWorkPageComponent,
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
export class OpenSourceWorkRoutingModule {
}
