import { Component, OnInit  } from '@angular/core';

import { VKService } from './vk.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  users: Array<User>;

  constructor(){       
  }
  ngOnInit() {  
    console.log("id");
    console.log(VKService.getId());
    VKService.getFriends(VKService.getId()).then( v => {
      this.users = v;
      console.log("friends");
      console.log(v);
      this.users = v; 
    });
    VKService.getUsers(VKService.getId()).then( v => {
      this.users.push(v);
      console.log("user");
      console.log(v);
    });
  }
}
