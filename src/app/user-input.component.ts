import { Input, Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'user-input',
  template: `
    <input type="text" [(ngModel)]="inputString"/>
    <br/>
    <users-list [users]="users  | sortUsers | filterUsers : inputString" iconClass ="glyphicon glyphicon-menu-right" [buttonClick]="selectUser"></users-list>  
  `
})
export class UserInputComponent {
  @Input() users   : Array<User>;
  @Input() selectUser : (user: User) => void; 
  @Input() onInput : (id: string) => void;
  inputString: string = "";
}
