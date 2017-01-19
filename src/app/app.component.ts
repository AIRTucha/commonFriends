import { Component, OnInit  } from '@angular/core';

import { VKService } from './vk.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users: string[] = [
    "test",
    "test2"
  ];
  constructor(){       
  }
  ngOnInit() {
    console.log("id");
    console.log(VKService.getId());
    VKService.getFriends(VKService.getId()).then( v => {
      this.users = v;
      console.log("friends");
      console.log(v);
    });
    VKService.getUsers(VKService.getId()).then( v => {
      this.users = v;
      console.log("user");
      console.log(v);
    });
  }
}
