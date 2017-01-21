import { Input, Component, OnChanges} from '@angular/core';
import { User } from './user';

@Component({
  selector: 'active-users-list',
  templateUrl: './active-users-list.component.html'
})
export class ActiveUsersListComponent{
  @Input() users : Array<User>;
  @Input() deleteUser  : (user: User) => void;  
}
