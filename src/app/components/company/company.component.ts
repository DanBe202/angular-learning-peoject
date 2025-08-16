import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ItemComponent} from '../item/item.component';
import {ItemActionsComponent} from '../item-actions.component/item-actions.component';
import {CompanyService} from './company.service';
import {Item} from '../../types/item.type';

@Component({
  selector: 'app-company',
  imports: [ItemComponent, ItemActionsComponent],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyComponent {
  private companyService = inject(CompanyService);


  getItems(): Item[] {
    return this.companyService.getItems();
  }

  addItem(name: string, price: number): void {
    this.companyService.addItem(name, price);
  }

  changeItem(item: Item, option: string): void {
    if (option === 'name') {
      const inputName = prompt('Please enter name');
      if (inputName) this.companyService.updateItem(item, inputName);
    } else if (option === 'price') {
      const inputPrice = Number(prompt('Please enter price'));
      if (!isNaN(inputPrice)) this.companyService.updateItem(item, Number(inputPrice));
    }
  }
}
