import { Input, Component } from '@angular/core';
import { User } from "./user";

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent {
  @Input() users      : Array<User>;
  @Input() iconClass  : string;
  @Input() buttonClick: (user: User) => void;
}
