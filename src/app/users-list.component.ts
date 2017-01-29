import { Input, Component, Output, EventEmitter } from '@angular/core';
import { User } from "./user";

@Component({
  selector: 'users-list',
  template: `
    <table class="usersTable">
      <tr class="user" *ngFor="let user of users" >
        <th>
          <a target="_blank" href="http://vk.com/id{{user.id}}">
            <img src="{{user.photoUrl}}"/>
            <span class=name>{{" " + user.firstName + " " + user.lastName}}</span>
          </a>
        </th>
        <th><span class="{{iconClass}}" style="cursor: pointer" aria-hidden="true" (click)="buttonClick.emit(user)"></span></th>
      </tr> 
    </table>   
  `,
  styles: [`
    .usersTable{
      width: 95%;
      margin-left: 2.5%;
    }
    .user:hover{
      background-color: #EDF3FF;
    }   
    a{ 
      text-decoration:none; 
    }
  `]
})
export class UsersListComponent {
  @Input() 
  users: Array<User>;
  @Input() 
  iconClass: string;
  @Output()
  buttonClick = new EventEmitter();
}
