import { Input, Component } from '@angular/core';

import { VKService } from './vk.service';
import { User } from './user';

@Component({
  selector: 'friends-intersection',
  templateUrl: './friends-intersection.component.html'
})
export class FriendsIntersectionComponent {

  @Input()
  set users(users: Array<User>) {
    this.getFriendsRecursively(users, (friendsMatrix) => {
      if (friendsMatrix.length > 0)
        this.commonFriends = friendsMatrix.reduce( 
          (arr1, arr2) => arr1.filter( userArr1 => arr2.findIndex( userArr2 => userArr1.id == userArr2.id) != -1 ? true : false ) 
        )
    });
  }

  getFriendsRecursively(users: Array<User>, callbakc:(friendsMatrix: Array<Array<User>>) => void  ){
    function getFriends(users: Array<User>, accum: Array<Array<User>>){
      if (users.length > 0)
        VKService.getFriends(users.shift().id).then( response => {       
              getFriends(users, accum.concat([response]))         
          }
        );
      else
        callbakc(accum);
    }
    getFriends(users, []);
  }
  @Input() updateFriends: () => void;
  commonFriends: Array<User>;

}
