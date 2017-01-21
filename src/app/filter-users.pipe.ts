import { Pipe, PipeTransform } from '@angular/core';

import { User } from './user';

@Pipe({
  name: 'filterUsers',
  pure: false
})
export class FilterUsersPipe implements PipeTransform {
  transform = (value: Array<User>, input: string): Array<User> => (
    (st: string) => 
      value.filter( v => 
          (v.id + '').toLowerCase().includes(st) || 
          (v.firstName + " " + v.lastName).toLowerCase().includes(st) || 
          (v.lastName + " " + v.firstName).toLowerCase().includes(st) 
      )
    )(input.toLowerCase())
 

}
