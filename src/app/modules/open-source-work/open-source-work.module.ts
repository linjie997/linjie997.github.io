import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {OpenSourceWorkPageComponent} from './ui/pages/open-source-work-page/open-source-work-page.component';
import {OpenSourceWorkRoutingModule} from './open-source-work-routing.module';
import {MatChipsModule} from '@angular/material/chips';
import {OpenSourceWorkComponent} from './ui/components/open-source-work/open-source-work.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    OpenSourceWorkPageComponent,
    OpenSourceWorkComponent,
  ],
  imports: [
    CommonModule,
    OpenSourceWorkRoutingModule,
    MatChipsModule,
    SharedModule
  ],
})
export class OpenSourceWorkModule {
}
