import {Component, Input, OnInit} from '@angular/core';
import {OpenSourceWork} from '../../../../../models/open-source-work.model';

@Component({
  selector: 'app-open-source-work',
  templateUrl: './open-source-work.component.html',
  styleUrls: ['./open-source-work.component.scss']
})
export class OpenSourceWorkComponent implements OnInit {
  @Input() openSourceWork: OpenSourceWork;

  constructor() {
  }

  ngOnInit(): void {
  }

}
