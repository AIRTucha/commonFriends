import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-input',
  templateUrl: './user-input.component.html'
})
export class UserInputComponent implements OnInit {
  @Input()
  friends : Array<string>;
  constructor() { }

  ngOnInit() {
    this.friends.push("test" + this.friends.length);
  }
}
