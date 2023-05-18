import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accutalAge'
})
export class AccutalAgePipe implements PipeTransform {

  transform(value: number, ...args: any[]): number {

    const date= new Date()

    const accutalYear = date.getFullYear()
    const result = accutalYear - value;
    return result;
  }

}
