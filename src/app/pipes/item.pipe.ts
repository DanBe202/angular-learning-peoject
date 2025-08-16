import {Pipe, PipeTransform} from '@angular/core';
import {Item} from '../types/item.type';


@Pipe({
  name: 'itemTransform'

})
export class ItemPipe implements PipeTransform {
  transform(item: Item) {
    if (!item) {
      return;
    }
    return `Name: ${item.name}, Price: ${item.price}`;
  }
}
