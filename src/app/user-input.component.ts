import { Input, Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'user-input',
  templateUrl: './user-input.component.html'
})
export class UserInputComponent {
  @Input() friends    : Array<User>;
  @Input() selectUser : (user: User) => void; 
}
