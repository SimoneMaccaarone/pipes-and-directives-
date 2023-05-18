import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chopDesc'
})
export class ChopDescPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {


    const numberOfChars = args[0] ? args[0] : args[30]

    if (value.length < numberOfChars) {
      return value;
    }
    return value.slice(0, numberOfChars) + '...';
  }

}

