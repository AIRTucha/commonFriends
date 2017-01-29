import { Input, Component, DoCheck, OnChanges } from '@angular/core';

import { VKService } from './vk.service';
import { User } from './user';

@Component({
  selector: 'friends-intersection',
  template: `
    <h4>Общие:</h4>
    <users-list 
      class="users-list" 
      iconClass="glyphicon glyphicon-plus"
      [users]=commonFriends 
      (buttonClick)="addUser($event)">
    </users-list>'
  `,
  styles: [`
    h4{
      color: #337ab7;
    }
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
      height: 750px;
      float: left;
      overflow-y: hidden;
    }    
    .users-list:hover{
      overflow-y: auto;
    }    
  `]
})
export class FriendsIntersectionComponent implements DoCheck {
  @Input()
  users: Array<User>;
  @Input() 
  selectedUsers: Array<User>;

  commonFriends: Array<User>;
  oldUsersLength = 0;

  /**
   * Add user to the Array of selected users
   * Remove user from the main Array if needed
   * @param - User
   */
  addUser = (user: User) => {
      if ( this.users.findIndex( v => (v.id == user.id) ) != -1)
        this.users.splice(this.users.indexOf(user), 1);
        
      if (this.selectedUsers.findIndex( selectedUser => selectedUser.id == user.id) == -1)
        this.selectedUsers.push(user); 
  }
  
  ngDoCheck () {
    //check if array length is changed
    if(this.selectedUsers.length != this.oldUsersLength) {
      if (this.selectedUsers.length > 1)           
        this.upDateCommonFriends();           
      else
        this.commonFriends = [];     
      this.oldUsersLength = this.selectedUsers.length;
    }         
  }   
  /**
   * Requests friends and identifes commun ones
   */
  upDateCommonFriends() {
      this.getFriendsRecursively(this.selectedUsers.slice(), (friendsMatrix) => {
        if (friendsMatrix.length > 0)
          this.commonFriends = friendsMatrix.reduce( 
            (arr1, arr2) => arr1.filter( userArr1 => arr2.findIndex( userArr2 => userArr1.id == userArr2.id) != -1 ? true : false ) 
          )
      });
  }
  /**
   * Recursively load User friends and 
   * push the two dimensoanal array to callbakc
   * @param - Array of users which friends have to be requested
   * @param - Function for processing of the "friends' matrix"
   */
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
}
