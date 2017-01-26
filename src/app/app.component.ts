import { Component, OnInit  } from '@angular/core';

import { VKService } from './vk.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid">
      <div class="row">
        <user-input class="col-sm-4"           [users]="users"         [selectUser]="selectUser" ></user-input>
        <friends-intersection class="col-sm-4" [users]="selectedUsers" [addUser]="addUser"    ></friends-intersection>
        <active-users-list class="col-sm-4"    [users]="selectedUsers" [deleteUser]="deleteUser" ></active-users-list>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit{
  users         : Array<User> = [];
  selectedUsers : Array<User> = [];

  selectUser = (user: User) => this.swapUser(this.users, this.selectedUsers, user);
  deleteUser = (user: User) => this.swapUser(this.selectedUsers, this.users, user);
  addUser = (user: User) => {
      if (this.selectedUsers.findIndex( selectedUser => selectedUser.id == user.id) == -1)
        this.selectedUsers.push(user); 
  }

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
