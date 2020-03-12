import { MiConsola } from './../core/model/util/miConsola';
import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {
  transform(value: any, ...args: any[]): string {
    let result = '';
    /* No suelo poner comentarios pero extremadamente orgulloso de esta solucion para pasar de timestamp a Date */
    const date = new Date(1970, 0, 1);
    date.setSeconds(value.seconds); 
    const day = date.getDay();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    result = 'Dia: ' + day + '-' + month + '-' + year +' Hora: ' + hour + ':' + minute;
    return result;
  }
}
