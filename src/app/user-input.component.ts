import { Input, Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'user-input',
  templateUrl: './user-input.component.html'
})
export class UserInputComponent {
  @Input() users   : Array<User>;
  @Input() selectUser : (user: User) => void; 
  @Input() onInput : (id: string) => void;
  inputString: string = "";
}
