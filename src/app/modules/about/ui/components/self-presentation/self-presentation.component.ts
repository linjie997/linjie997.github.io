import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-presentation',
  templateUrl: './self-presentation.component.html',
  styleUrls: ['./self-presentation.component.scss'],
})
export class SelfPresentationComponent implements OnInit {

  readonly avatar: string = 'https://www.placecage.com/c/400/400';

  age: number;

  constructor() {
  }

  ngOnInit(): void {
    this.getMyCurrentAge();
  }

  private getMyCurrentAge(): void {
    const birthday: Date = new Date('1997/08/31');
    const today: Date = new Date();
    this.age = today.getFullYear() - birthday.getFullYear();
  }

}
