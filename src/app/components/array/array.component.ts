import {ChangeDetectionStrategy, Component, input, model, output} from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import {CardComponent} from '../card/card.component';

@Component({
  selector: 'app-array',
  imports: [ButtonComponent, CardComponent],
  templateUrl: './array.component.html',
  styleUrl: './array.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrayComponent {
  inputArray = input.required<number[]>();
  modelArray = model.required<number[]>();

  protected readonly action = output();

  onAction(): void {
    this.action.emit();
  }

  popValue(): void {
    this.modelArray.update((value) => {
      value.pop()
      return [...value]
    });
  }
}
