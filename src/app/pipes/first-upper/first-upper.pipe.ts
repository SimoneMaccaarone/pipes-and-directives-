import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUpper'
})

// Pipe che trasforma la 1° lettera in UpperCase
export class FirstUpperPipe implements PipeTransform {

  // valore ingresso e uscita: string e string
  transform(value: string, ...args: any[]): string {

    const firstChar = value[0];
    const firstCharUpper = firstChar.toUpperCase();
    const restOfString = value.slice(1);
    const result = firstCharUpper + restOfString;

    console.log(value)
    return result;
  }

}
