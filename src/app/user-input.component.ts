import { Input, Component } from '@angular/core';
import { User } from './user';

import { VKService } from './vk.service';

@Component({
  selector: 'user-input',
  template: `
    <input type="text" [(ngModel)]="inputString" (keyup)=searchUsers(inputString)/>
    <br/>
    <users-list [users]="users  | sortUsers | filterUsers : inputString.toLowerCase()" iconClass ="glyphicon glyphicon-menu-right" [buttonClick]="selectUser"></users-list> 
    <br/>
    <users-list [users]="searchResult" iconClass ="glyphicon glyphicon-menu-right" [buttonClick]="selectUser"></users-list>  
  `
})
export class UserInputComponent {
  @Input() users   : Array<User>;
  @Input() selectUser : (user: User) => void; 
  @Input() onInput : (id: string) => void;

  searchResult : Array<User> = [];
  onUpdate = false;
  inputString: string = "";

  searchUsers(input: string){
    if (input.length > 0) {
      if (!this.onUpdate) {
        VKService.getSearch(input).then( response => 
          this.searchResult = response.filter( user => this.users.findIndex( newUser => user.id == newUser.id ) == -1 )
        );  
        this.onUpdate = true;
        setTimeout(() => this.onUpdate = false, 500);
      }   
    }      
    else {
      this.searchResult = [];  
      this.onUpdate = false;
    }       
  }
}
