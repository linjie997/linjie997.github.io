import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppConfig } from '../../../../../utils/app-config';
import { ToastService } from '../../../../../services/toast-service/toast.service';
import { TranslatorService } from '../../../../../services/translator-service/translator.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
})
export class ContactsPageComponent implements OnInit {

  readonly email: string = AppConfig.email;
  readonly linkedIn: string = AppConfig.linkedIn;
  readonly github: string = AppConfig.github;

  readonly emailToAction: any;

  constructor(
    private sanitizer: DomSanitizer,
    private translator: TranslatorService,
    private toast: ToastService,
  ) {
    this.emailToAction = this.sanitizer.bypassSecurityTrustResourceUrl(`mailto:${this.email}`);
  }

  ngOnInit(): void {
  }

  onEmailCopied() {
    const str: string = this.translator.getString('email_copied');
    this.toast.addToast(str);
  }
}
