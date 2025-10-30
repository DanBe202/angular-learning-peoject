import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {ArrayComponent} from '../../components/array/array.component';
import {CardComponent} from '../../components/card/card.component';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-arrays',
  imports: [
    ArrayComponent,
    CardComponent,
    JsonPipe
  ],
  templateUrl: './arrays.html',
  styleUrl: './arrays.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Arrays {
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
