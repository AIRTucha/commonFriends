import { Component, OnInit  } from '@angular/core';

import { VKService } from './vk.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-4"><user-input [(users)]="users" [selectUser]="selectUser"></user-input></div>
        <div class="col-sm-4"><friends-intersection [users]=selectedUsers></friends-intersection></div>
        <div class="col-sm-4"><active-users-list [users]=selectedUsers [deleteUser]="deleteUser"></active-users-list></div>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit{
  users         : Array<User> = [];
  selectedUsers : Array<User> = [];

  selectUser = (user: User) => this.swapUser(this.users, this.selectedUsers, user);
  deleteUser = (user: User) => this.swapUser(this.selectedUsers, this.users, user);
  
  swapUser(arr1: Array<User>, arr2: Array<User>, obj: User): void {
    arr1.splice(arr1.indexOf(obj), 1);
    if (arr2.findIndex( user => obj.id == user.id) == -1)
      arr2.push(obj); 
  }

  ngOnInit() {    
    VKService.getFriends(VKService.getId()).then( v => {
      this.users = v; 
    });
  }


}
