import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countDate'
})
export class CountDatePipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
  }

}
