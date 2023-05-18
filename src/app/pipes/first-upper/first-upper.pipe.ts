import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUpper'
})

// Pipe che trasforma la 1° lettera in UpperCase
export class FirstUpperPipe implements PipeTransform {

  // valore ingresso e uscita: string e string
  transform(value: string, ...args: any[]): string {

    console.log(value)
    return 'scherzo';
  }

}
