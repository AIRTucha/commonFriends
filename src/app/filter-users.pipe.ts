import { Pipe, PipeTransform } from '@angular/core';

import { VKService } from './vk.service';
import { User } from './user';

@Pipe({
  name: 'filterUsers',
  pure: false
})
export class FilterUsersPipe implements PipeTransform {
  transform = (value: Array<User>, input: string): Array<User> => value.filter( v => 
    (v.id + '').toLowerCase().includes(input) || 
    (v.firstName + " " + v.lastName).toLowerCase().includes(input) || 
    (v.lastName + " " + v.firstName).toLowerCase().includes(input)
  );
  
}
