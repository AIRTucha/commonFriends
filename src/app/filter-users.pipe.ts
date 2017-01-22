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
      console.log("i need more");
      VKService.getSearch(input).then( response => value = value.concat(response));
      this.onUpdate = true;
      setTimeout(() => this.onUpdate=false, 5000 );
    }
      
    return users;
  }
}
