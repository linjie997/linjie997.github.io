import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private processingMessage = false;
  private messageQueue: SnackbarToastConfig[] = [];

  constructor(
    private snackBar: MatSnackBar,
  ) {
  }

  /**
   * Add toast with optional action and duration
   * Default action: Ok
   * Default duration: 4000 milliseconds
   * @param msg
   * @param action
   * @param duration
   */
  addToast(msg: string, action = 'Ok', duration = 4000) {
    const length = this.messageQueue.length;
    if (length === 0 || msg !== this.messageQueue[length - 1].message) {
      this.messageQueue.push({
        message: msg,
        action: action,
        duration: duration,
        verticalPosition: 'bottom',
      });
    }

    if (!this.processingMessage) {
      return this.displayToast();
    }
  }

  private getNextMessage(): SnackbarToastConfig | undefined {
    return this.messageQueue.length ? this.messageQueue.shift() : undefined;
  }

  private displayToast(): void {
    const toast = this.getNextMessage();

    if (!toast) {
      this.processingMessage = false;
      return;
    }

    this.processingMessage = true;

    this.snackBar.open(toast.message, toast.action, {
      duration: toast.duration,
      verticalPosition: toast.verticalPosition,
    }).afterDismissed().subscribe(() => {
      this.displayToast();
    });
  }
}

// Just a quick interface to store easier the ng-toast configuration queue
interface SnackbarToastConfig {
  message?: string;
  action?: string;
  duration?: number;
  verticalPosition?: MatSnackBarVerticalPosition;
}
