import { Input, Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'user-input',
  templateUrl: './user-input.component.html'
})
export class UserInputComponent implements OnInit {
  @Input()
  friends : Array<User>;
  constructor() { }

  ngOnInit() {
  }
}
