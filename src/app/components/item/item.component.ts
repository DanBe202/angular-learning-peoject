import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';

import {ButtonComponent} from '../button/button.component';
import {ItemPipe} from '../../pipes/item.pipe';
import {Item} from '../../types/item.type';

@Component({
  selector: 'app-item',
  imports: [
    ButtonComponent,
    ItemPipe
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {
  item = input.required<Item>()

  protected readonly onChangeItem = output<{ item: Item, option: string }>();

  onChangeName(): void {
    this.onChangeItem.emit({item: this.item(), option: 'name'});
  }

  onChangePrice(): void {
    this.onChangeItem.emit({item: this.item(), option: 'price'});
  }
}
