import { Input, Component, Output, EventEmitter } from '@angular/core';

import { User } from './user';
import { VKService } from './vk.service';

@Component({
  selector: 'user-input',
  template: `
    <input type="text" class=input [(ngModel)]="inputString" (keyup)=searchUsers(inputString)/>
    <br/>
    <div class="users-list">
      <users-list 
        [users]="users  | sortUsers | filterUsers : inputString.toLowerCase()" 
        iconClass ="glyphicon glyphicon-plus" 
        (buttonClick)="selectUser.emit($event)">
      </users-list> 
      <users-list 
        [users]="searchResult" 
        iconClass ="glyphicon glyphicon-plus" 
        (buttonClick)="selectUser.emit($event)">
      </users-list>  
    </div>
  `,
  styles: [`
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

    .input {
      width: 100%;
    }
    
  `]
})
export class UserInputComponent {
  @Input() 
  users   : Array<User>;
  @Output() 
  selectUser = new EventEmitter(); 

  searchResult : Array<User> = [];
  onUpdate = false;
  inputString: string = "";

  /**
   * Handles global search in VK based on input string
   * @param - input
   */
  searchUsers(input: string) {
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
