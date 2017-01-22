import { Pipe, PipeTransform } from '@angular/core';

import { VKService } from './vk.service';
import { User } from './user';

@Pipe({
  name: 'filterUsers',
  pure: false
})
export class FilterUsersPipe implements PipeTransform {
  onUpdate = false;
  transform = (value: Array<User>, input: string): Array<User> => {
    let st = input.toLowerCase();
    let users = value.filter( v => 
      (v.id + '').toLowerCase().includes(st) || 
      (v.firstName + " " + v.lastName).toLowerCase().includes(st) || 
      (v.lastName + " " + v.firstName).toLowerCase().includes(st) 
    );
    if (users.length == 0 && !this.onUpdate)
    {
      VKService.getSearch(input).then( response => response.map( user => {
        if (value.findIndex( vUser => user.id == vUser.id) == -1)
          value.push(user);
      }));
      this.onUpdate = true;
      setTimeout(() => this.onUpdate = false, 2500);
    }
      
    return users;
  }
}
