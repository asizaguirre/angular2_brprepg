import { Component } from '@angular/core';
import { UserDataService } from './user-data.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserDataService]
})
export class AppComponent {
  title = 'Brasil pre pagos app';

  private users;
  private activeUsers;
  constructor(private userService: UserDataService) { }
  getUsers() {
    return this.userService.get().then(users => {
      this.users = users;
      this.activeUsers = this.users.filter(users => users.active).length;
    });
  }
  ngOnInit() {
    this.getUsers();
  }

  private newUser;
  addUser() {
    this.userService.add({ title: this.newUser, active: false }).then(() => {
      return this.getUsers();
    }).then(() => {
      this.newUser = ''; // clear input form value
    });
  }
  /* newUser: User = new User();
   constructor(private userDataService: UserDataService) {
 
   }
   addUser() {
     this.userDataService.addUser(this.newUser);
     this.newUser = new User();
   }
 
   get getAllUsers() {
     return this.userDataService.getAllUsers();
   }*/

}
