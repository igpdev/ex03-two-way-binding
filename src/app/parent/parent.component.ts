import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
})
export class ParentComponent implements OnInit {
  users: User[];
  user;
  serviceCalled: Boolean = false;
  userToSearch: String;
  userFound = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.serviceCalled = true;
    });
  }

  searchUserInfo() {
    this.user = this.users.filter(
      (user) =>
        user.first_name.toLowerCase() === this.userToSearch.toLowerCase()
    )[0];

    if (this.user) {
      this.userFound = true;
    }
  }
}
