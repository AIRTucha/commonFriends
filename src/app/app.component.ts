import { Component, OnInit  } from '@angular/core';

import { VKService } from './vk.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid">
      <div class="row">
        <user-input           class="col-sm-4" [users]="users"           (selectUser)="selectUser($event)"  ></user-input>
        <active-users-list    class="col-sm-4" [users]="selectedUsers"   (deleteUser)="deleteUser($event)"  ></active-users-list>
        <friends-intersection class="col-sm-4" [(users)]="users"         [(selectedUsers)]="selectedUsers"  ></friends-intersection>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  users         : Array<User> = [];
  selectedUsers : Array<User> = [];

  /**
   * Move user to the Array of seletec users
   * @param - User to select
   */
  selectUser = (user: User) => this.swapUser(this.users, this.selectedUsers, user);
  /**
   * Move user to the main Array
   * @param - User to move
   */
  deleteUser = (user: User) => this.swapUser(this.selectedUsers, this.users, user);

  /**
   * @param - source Array
   * @param - target Array
   * @param - User which should be swaped
   */
  swapUser(arr1: Array<User>, arr2: Array<User>, obj: User): void {
    arr1.splice(arr1.indexOf(obj), 1);
    if (arr2.findIndex( user => obj.id == user.id) == -1)
      arr2.push(obj); 
  }

  ngOnInit() {    
    //requests friends of the user
    VKService.getFriends(VKService.getId()).then( v => {
      this.users = v; 
    });
  }
}
