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
      // let users: Array<any> = [
      //   {
      //     first_name : "Артем",
      //     last_name : "Матюшевский",
      //     photo_50 : "https://pp.vk.me/c837327/v837327423/13f3e/k6AH4m_xU4g.jpg",
      //     uid : 333423
      //   },
      //   {
      //     first_name : "Nancy",
      //     last_name : "Novikova",
      //     photo_50 : "https://pp.vk.me/c626522/v626522377/20bc4/Q1CAaYRscKk.jpg",
      //     uid : 1366377
      //   },
      //   {
      //     first_name : "Кайрат",
      //     last_name : "Сагинаев",
      //     photo_50 : "https://pp.vk.me/c626231/v626231924/46c7f/rhs6iaW_ChY.jpg",
      //     uid : 1442924
      //   },
      // ]
      return new Promise(resolve => 
        //  resolve( users.map( v => new User(v.uid, v.first_name, v.last_name, v.photo_50) ))
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
        // resolve( new User(
        //         "TestId",//r.response[0].uid, 
        //         "TestName",//r.response[0].first_name, 
        //         "TestLastMame",// r.response[0].last_name, 
        //         "https://pp.vk.me/c626231/v626231924/46c7f/rhs6iaW_ChY.jpg"//r.response[0].photo_50
        //         ))   
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
     * @return - array of friends with brief data
     */
    static getSearch(query: string): Promise<Array<User>>{
      // let users: Array<any> = [
      //   {
      //     first_name : "Артемка",
      //     last_name : "Матюшевский",
      //     photo_50 : "https://pp.vk.me/c837327/v837327423/13f3e/k6AH4m_xU4g.jpg",
      //     uid : 3334231
      //   },
      //   {
      //     first_name : "Nancys",
      //     last_name : "Novikova",
      //     photo_50 : "https://pp.vk.me/c626522/v626522377/20bc4/Q1CAaYRscKk.jpg",
      //     uid : 13663772
      //   },
      //   {
      //     first_name : "Кайрат",
      //     last_name : "Сагинаев",
      //     photo_50 : "https://pp.vk.me/c626231/v626231924/46c7f/rhs6iaW_ChY.jpg",
      //     uid : 14429243
      //   },
      // ]
      return new Promise(resolve => 
        //  resolve( users.map( v => new User(v.uid, v.first_name, v.last_name, v.photo_50) ))
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
