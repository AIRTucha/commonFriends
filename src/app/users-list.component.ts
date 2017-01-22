import { Input, Component } from '@angular/core';
import { User } from "./user";

@Component({
  selector: 'users-list',
  template: `
    <div *ngFor="let user of users">
      <a href="http://vk.com/id{{user.id}}">
      <img src="{{user.photoUrl}}"/>
      <span>{{user.firstName + " " + user.lastName}}</span>
      </a>
      <span class="{{iconClass}}" aria-hidden="true" (click)="buttonClick(user)"></span>
    </div>
  `
})
export class UsersListComponent {
  @Input() users      : Array<User>;
  @Input() iconClass  : string;
  @Input() buttonClick: (user: User) => void;
}
