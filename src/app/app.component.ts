import { Component, OnInit  } from '@angular/core';

import { VKService } from './vk.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  users: Array<User> = [];
  selectedUsers: Array<User> = [];
  selectUser = (user: User) => this.swapUser(this.users, this.selectedUsers, user);
  deleteUser = (user: User) => this.swapUser(this.selectedUsers, this.users, user);
  
  swapUser<T>(arr1: Array<T>, arr2: Array<T>, obj: T): void{
    arr1.splice(arr1.indexOf(obj), 1);
    arr2.push(obj); 
  }

  ngOnInit() {    
    VKService.getFriends(VKService.getId()).then( v => {
      this.users = v; 
    });
    VKService.getUsers(VKService.getId()).then( v => {
      this.users.push(v);
    });
  }


}
