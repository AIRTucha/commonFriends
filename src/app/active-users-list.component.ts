import { Input, Component, OnChanges, Output, EventEmitter } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'active-users-list',
  template: `
    <h4>Выбранные:</h4>
    <users-list 
      class="users-list"
      iconClass="glyphicon glyphicon-minus"
      [users]=users 
      (buttonClick)="deleteUser.emit($event)">
    </users-list>
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
export class ActiveUsersListComponent{
  @Input() 
  users : Array<User>;
  @Output() 
  deleteUser = new EventEmitter();  
}
