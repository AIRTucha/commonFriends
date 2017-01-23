import { Input, Component } from '@angular/core';
import { User } from "./user";

@Component({
  selector: 'users-list',
  template: `
    <table style="width:100%">
      <tr class=user *ngFor="let user of users" >
        <th>
          <a target="_blank" href="http://vk.com/id{{user.id}}">
            <img src="{{user.photoUrl}}"/>
            <span class=name>{{" " + user.firstName + " " + user.lastName}}</span>
          </a>
        </th>
        <th><span class="{{iconClass}}" style="cursor: pointer" aria-hidden="true" (click)="buttonClick(user)"></span></th>
      </tr> 
    </table>   
  `,
  styles: [
    `
    .user{
      width: 100%;      
    }
    .user:hover{
      background-color: #FCFDFF;
    }      
    }
    a{ 
       text-decoration:none; 
    }
    `
  ]
})
export class UsersListComponent {
  @Input() users      : Array<User>;
  @Input() iconClass  : string;
  @Input() buttonClick: (user: User) => void;
}
