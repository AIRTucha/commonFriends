import { Injectable } from '@angular/core';
import { User } from './user';

declare var VK: any;

@Injectable()
export class VKService {
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
          }, 
          r => {
            resolve(r.response.map( v => new User(v.uid, v.first_name, v.last_name, v.photo_50) )); 
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
     * @return - user
     */
    static getUsers(id: string): Promise<User>{
      return new Promise(resolve =>
       VK.api('users.get', 
        {
          user_ids: id,
          fields:"photo_50"
        },
        r => {
          resolve(                  
            new User(
              r.response[0].uid, 
              r.response[0].first_name, 
              r.response[0].last_name, 
              r.response[0].photo_50
              )
            );    
        })
       );     
    }


    /**
     * @param - user id
     * @return - array of users
     */
    static getSearch(query: string): Promise<Array<User>>{
      return new Promise(resolve => 
        VK.api('users.search', {
            q: query, 
            count: 10,
            fields: "photo_50"
          }, 
          r => {
            resolve(r.response.slice(1).map( v => new User(v.uid, v.first_name, v.last_name, v.photo_50) )); 
          })
      );
    }    
}
