import { Component } from '@angular/core';

declare var VK: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  constructor(){   
      
      VK.api('friends.get', {
        user_id: window.location.href.split('&').find((v) => v.includes('viewer_id')).split('=')[1], 
        order:"hint",
        fields:"photo_50"
      }, function(r) {
        console.log("friends");
          console.log(r.response);  
      });
console.log(s.split('&').find((v) => v.includes('viewer_id')).split('=')[1]);

    // VK.init(function() {       
    //     VK.api('users.get', {"user_ids": 1}, function(r) {
    //         console.log(r.response[0].first_name);
    //         this.title = r.response[0].first_name;     
    //     });
    // }, function() { 
    //    // API initialization failed 
    //    // Can reload page here 
    // }, '5.60');
  }
}
