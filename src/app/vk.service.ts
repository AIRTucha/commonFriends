import { Injectable } from '@angular/core';

declare var VK: any;

@Injectable()
export class VKService {

  constructor() { }

    /**
     * @param - user id
     * @return - array of friends with brief data
     */
    getFriends(id: string): Promise<any>{
      return new Promise(resolve => 
        VK.api('friends.get', {
            user_id: id, 
            order:"hint",
            fields:"photo_50"
          }, function(r) {
            resolve(id);
            console.log(r.response);  
        })
      );
    }

    /**
     * @param - current user id
     */
    getId(): string {
      return window.location.href.split('&').find((v) => v.includes('viewer_id')).split('=')[1];
    }

    /**
     * @param - user id
     * @return - 
     * { id: string,
        first_name: string,
        last_name: string,
        photo_50: string_url 
      } 
     */
    getUsers(id: string): Promise<any>{
      return new Promise(resolve =>
       VK.api('users.get', 
        {"user_ids": id},
        function(r) {
                resolve(r.response[0]);    
        })
      );
     
    }
}
