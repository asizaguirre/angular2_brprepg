import { Injectable } from '@angular/core';
import { User } from './user';

let users = [
  { nome: 'João', cargo: 'Dev', active: true },
  { nome: 'Maria', cargo: 'Dev', active: true },
  { nome: 'José', cargo: 'Dev', active: false },
  
];

@Injectable()
export class UserDataService {

  /*lastId: number = 0;
  users: User[] = [];
*/


  constructor() { }


  get() {
    return new Promise(resolve => resolve(users));
  }

  add(data) {
    return new Promise(resolve => {
      users.push(data);
      resolve(data);
    });
  }

  /*addUser(user: User): UserDataService {
    if (!user.id) {
      user.id = ++this.lastId;
    }
    this.users.push(user);
    return this;
  }

  getAllUsers(): User[] {
    return this.users;
  }*/

}
