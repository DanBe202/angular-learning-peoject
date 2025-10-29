import {Injectable, signal} from '@angular/core';
import {Company} from '../../types/company.type';
import {Item} from '../../types/item.type';

@Injectable({providedIn: 'root'})
export class CompanyService {
  company = signal<Company>({
    name: 'Company',
    owner: 'Empower',
    items: []
  });

  getItems(): Item[] {
    return this.company().items;
  }

  addItem(name: string, price: number): void {
    this.company.update((company) => {
      company.items = [...company.items, {
        id: (this.company().items.at(-1)?.id ?? 0) + 1,
        name: name,
        price: price
      }]
      return company;
    })
  }

  updateItem(oldItem: Item, value: string | number): void {
    this.company.update((company) => {
      company.items = company.items.map((item) =>
        item.id === oldItem.id
          ? {
            ...item,
            name: typeof value === "string" ? value : item.name,
            price: typeof value === "number" ? value : item.price,
          }
          : item
      );
      return company;
    });
  }
}
