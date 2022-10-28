import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {

  transform(value: number, ...args: number[]): any {
    let altura = (value/10)

    if(altura >= 1){
      return altura + ' Meters';
    }
    return value + '0 Centimeters'
  }

}
