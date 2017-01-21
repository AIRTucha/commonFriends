import { Pipe, PipeTransform } from '@angular/core';

import { User } from './user';
@Pipe({
  name: 'sortUsers',
  pure: false
})
export class SortUsersPipe implements PipeTransform {
  transform = (users: Array<User>): Array<User> => users.sort( 
    (a, b) => a.firstName + a.lastName > b.firstName + b.lastName ? 1 : -1 
  )
}
