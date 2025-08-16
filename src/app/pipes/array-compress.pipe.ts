import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'arrayCompress'
})
export class ArrayCompressPipe implements PipeTransform {
  transform(array: number[], length?: number): string {
    if (!length) {
      return `[ ${array.toString()} ]`;
    }

    const full = array.toString();
    let parts = full.split(',');
    let currentLength = 0;
    let safeParts: string[] = [];

    for (const part of parts) {
      const partWithComma = (safeParts.length > 0 ? ',' : '') + part;
      if (currentLength + partWithComma.length <= length) {
        safeParts.push(part);
        currentLength += partWithComma.length;
      } else {
        break;
      }
    }

    return `[ ${safeParts.join(',')}${safeParts.length < array.length ? ', ...' : ''} ]`;
  }
}
