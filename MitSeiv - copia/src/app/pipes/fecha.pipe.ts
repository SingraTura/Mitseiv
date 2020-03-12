import { MiConsola } from './../core/model/util/miConsola';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(value: Date, ...args: any[]): string {
    let result = '';
    result = result + value.getFullYear() + '-' + '3'+ '-' + value.getDate();
    return result;
  }

}
