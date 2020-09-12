import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '../../../../../services/toolbar-service/toolbar.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  readonly background = '/assets/images/code-snippet.jpg';

  constructor(
    private readonly toolbarService: ToolbarService,
  ) {
  }

  ngOnInit(): void {
    this.toolbarService.hideToolbar(1500);
  }

}
