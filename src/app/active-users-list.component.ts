import { Input, Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'active-users-list',
  templateUrl: './active-users-list.component.html'
})
export class ActiveUsersListComponent implements OnInit {
  @Input()
  activeUsers : Array<User>;
  constructor() { }

  ngOnInit() {

  }

}
