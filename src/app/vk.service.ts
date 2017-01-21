import { Injectable } from '@angular/core';
import { User } from './user';

declare var VK: any;

@Injectable()
export class VKService {

  constructor() { }

    /**
     * @param - user id
     * @return - array of friends with brief data
     */
    static getFriends(id: string): Promise<Array<User>>{
      return new Promise(resolve => 
        VK.api('friends.get', {
            user_id: id, 
            order: "hint",
            fields: "photo_50"
          }, function(r) {
            console.log(r.response);
            resolve(r.response.map( v => { new User(v.id, v.first_name, v.last_name, v.photo_50) })); 
          })
      );
    }

    /**
     * @param - current user id
     */
    static getId(): string {
      return window.location.href.split('&').find((v) => v.includes('viewer_id')).split('=')[1];
    }

    /**
     * @param - user id
     * @return - user information
     * { 
        id: string,
        first_name: string,
        last_name: string,
        photo_50: string_url 
      } 
     */
    static getUsers(id: string): Promise<User>{
      return new Promise(resolve =>
       VK.api('users.get', 
        {
          user_ids: id,
          fields:"photo_50"
        },
        function(r) {
                console.log(r.response[0]);
                resolve(                  
                  new User(
                    r.response[0].id, 
                    r.response[0].first_name, 
                    r.response[0].last_name, 
                    r.response[0].photo_50
                    )
                  );    
        })
      );
     
    }
}
