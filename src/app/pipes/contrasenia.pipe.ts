import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {

  transform(value: string, i: boolean=true): string {
    return (i) ? '*'.repeat(value.length) : value;
  }
}
