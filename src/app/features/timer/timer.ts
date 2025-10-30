import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {interval, map, Subscription} from 'rxjs';

@Component({
  selector: 'app-timer.component',
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timer {
  buttonDisabled = signal(false);
  timer = interval((1000));
  timerSubscription: Subscription | undefined;
  timerStarted = signal(false);

  timerValue = signal(0);

  startTimer() {
    const lastValue = this.timerValue();

    this.timerSubscription = this.timer.pipe(
      map((value) => value + lastValue + 1)
    ).subscribe((newValue) => {
      this.timerValue.set(newValue);
    })
    this.toggleButton();
    this.timerStarted.set(true);
  }

  stopTimer() {
    if (!this.timerSubscription) return;
    this.timerSubscription.unsubscribe();
    this.toggleButton();
  }

  restartTimer() {
    if (!this.timerSubscription) return;
    this.timerSubscription.unsubscribe();
    this.timerValue.set(0);
    this.timerStarted.set(false);
  }

  toggleButton() {
    this.buttonDisabled.set(!this.buttonDisabled());
  }
}
