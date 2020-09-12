import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalLifeRoutingModule } from './personal-life-routing.module';
import { PersonalLifePageComponent } from './ui/pages/personal-life-page/personal-life-page.component';


@NgModule({
  declarations: [PersonalLifePageComponent],
  imports: [
    CommonModule,
    PersonalLifeRoutingModule
  ]
})
export class PersonalLifeModule { }
