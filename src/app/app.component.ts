import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {ArrayComponent} from './components/array/array.component';
import {RouterOutlet} from '@angular/router';
import {CardComponent} from './components/card/card.component';
import {JsonPipe} from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [
    ArrayComponent,
    RouterOutlet,
    CardComponent,
    JsonPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected firstArray = signal([1, 2, 3, 4, 5, 6]);
  protected length = computed(() => this.firstArray().length);
  protected secondArray = signal([1, 1, 2, 3, 5, 8]);

  changeValue(): void {
    this.firstArray.update((value) => [...value, value.length + 1]);
    this.secondArray.update((value) => {
      const first = value.at(-2)
      const second = value.at(-1)
      if (first && second) {
        return [...value, first + second]
      }
      return [...value, 1];
    });
  }
}
