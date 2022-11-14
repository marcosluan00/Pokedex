import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    let  aux = value +''
    return aux.padStart(3,'0')
    
  }

}
