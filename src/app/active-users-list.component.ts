import { Input, Component, OnChanges} from '@angular/core';
import { User } from './user';

@Component({
  selector: 'active-users-list',
  template: `
    <users-list [users]=users iconClass="glyphicon glyphicon-remove" [buttonClick]="deleteUser"></users-list>
  `
})
export class ActiveUsersListComponent{
  @Input() users : Array<User>;
  @Input() deleteUser  : (user: User) => void;  
}
