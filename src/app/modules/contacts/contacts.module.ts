import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsPageComponent } from './ui/pages/contacts-page/contacts-page.component';


@NgModule({
  declarations: [
    ContactsPageComponent,
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule,

    ClipboardModule,
  ],
})
export class ContactsModule {
}
