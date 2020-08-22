import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSlice'
})
export class TextSlicePipe implements PipeTransform {
  transform(value: string, maxLength: number = 150): string {
    if (value.length > maxLength) {
      return `${value.substring(0, maxLength)}...`;
    } else {
      return value;
    }
  }
}
