import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statColor',
  standalone: true
})
export class StatColorPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 50) {
      return 'bg-red-500';
    } else if (value < 100) {
      return 'bg-yellow-500';
    } else {
      return 'bg-green-500';
    }
  }

}
