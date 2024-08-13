import { Pipe, PipeTransform } from '@angular/core';
import { Paths } from '../Models/paths';
import { find } from 'rxjs';

@Pipe({
  name: 'paths',
  standalone: true
})
export class PathsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let findValue = Paths.find(item => item.name == value)
    return findValue ? findValue.link: ''
  }

}
