import { Input, Component, OnChanges} from '@angular/core';
import { User } from './user';

@Component({
  selector: 'active-users-list',
  template: `
    <users-list [users]=users class="users-list" iconClass="glyphicon glyphicon-remove" [buttonClick]="deleteUser"></users-list>
  `,
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
      height: 1500px;
      float: left;
      overflow-y: hidden;
    }    
    .users-list:hover{
      overflow-y: auto;
    }    
    `
  ]
})
export class ActiveUsersListComponent{
  @Input() users : Array<User>;
  @Input() deleteUser  : (user: User) => void;  
}
