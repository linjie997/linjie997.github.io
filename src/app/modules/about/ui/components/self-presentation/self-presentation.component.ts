import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-presentation',
  templateUrl: './self-presentation.component.html',
  styleUrls: ['./self-presentation.component.scss']
})
export class SelfPresentationComponent implements OnInit {

  readonly avatar: string = 'https://www.placecage.com/c/400/400';

  constructor() { }

  ngOnInit(): void {
  }

}
