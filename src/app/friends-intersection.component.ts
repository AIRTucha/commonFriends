import { Input, Component, DoCheck, OnChanges } from '@angular/core';

import { VKService } from './vk.service';
import { User } from './user';

@Component({
  selector: 'friends-intersection',
  template: '<users-list class="users-list" [users]=commonFriends></users-list>',
  styles: [
    `
    .users-list::-webkit-scrollbar
    {
      width: 6px;
      background-color: #FFFFFF;
    }

    .users-list::-webkit-scrollbar-thumb
    {
      border-radius: 3px;
      background-color: #E8F4FF;
      opacity: 0.25;
    }

    .users-list{
      width: 100%;
      height: 100%;
      float: left;
      overflow-y: hidden;
    }    
    .users-list:hover{
      overflow-y: auto;
    }    
    `
  ]
})
export class FriendsIntersectionComponent implements DoCheck {
  @Input()
  users: Array<User>;

  ngDoCheck () {
    if(this.users.length != this.oldUsersLength) {
      if (this.users.length > 1)           
        this.upDateCommonFriends();           
      else
        this.commonFriends = [];     
      this.oldUsersLength = this.users.length;
    }         
  }   

  upDateCommonFriends() {
      this.getFriendsRecursively(this.users.slice(), (friendsMatrix) => {
        if (friendsMatrix.length > 0)
          this.commonFriends = friendsMatrix.reduce( 
            (arr1, arr2) => arr1.filter( userArr1 => arr2.findIndex( userArr2 => userArr1.id == userArr2.id) != -1 ? true : false ) 
          )
      });
  }

  getFriendsRecursively(users: Array<User>, callbakc:(friendsMatrix: Array<Array<User>>) => void  ){
    function getFriends(users: Array<User>, accum: Array<Array<User>>){
      if (users.length > 0)
        VKService.getFriends(users.shift().id).then( response => {       
              getFriends(users, accum.concat([response]))         
          }
        );
      else
        callbakc(accum);
    }
    getFriends(users, []);
  }

  commonFriends: Array<User>;
  oldUsersLength = 0;
}
