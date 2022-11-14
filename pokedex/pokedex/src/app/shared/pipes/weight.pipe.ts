import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight'
})
export class WeightPipe implements PipeTransform {

  transform(value: number, ...args: number[]): any {
    let peso = (value/10)

    if(peso >= 1){
      return peso + ' kg';
    } 
    return peso + '0 g'
  }

}
