import {ChangeDetectionStrategy, Component, output} from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-item-actions',
  imports: [
    ButtonComponent,
    FormsModule
  ],
  templateUrl: './item-actions.component.html',
  styleUrl: './item-actions.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemActionsComponent {
  protected readonly createItem = output<{ name: string, price: number }>()
  protected name = '';
  protected price = 0;

  createAction(): void {
    if (!this.name && !this.price) {
      return;
    }
    this.createItem.emit({name: this.name, price: Number(this.price)});
    this.name = '';
    this.price = 0;
  }

}
