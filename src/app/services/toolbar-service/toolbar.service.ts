import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToolbarService {

  private showToolbarSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  showToolbar$: Observable<boolean> = this.showToolbarSubject$.asObservable();

  constructor() {
  }

  hideToolbar(milliseconds?: number): void {
    this.showToolbarSubject$.next(false);
    if (milliseconds) {
      setTimeout(() => this.showToolbar(), milliseconds);
    }
  }

  showToolbar(): void {
    this.showToolbarSubject$.next(true);
  }
}
