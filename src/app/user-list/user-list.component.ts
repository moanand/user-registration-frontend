import { Component, OnInit } from '@angular/core';
import { UserResponse } from '../model/user-response.model';
import { User } from '../model/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userResponse!: UserResponse;
  userList: User[] = [];

  constructor(private userService: UserService) {
    console.log('UserListComponent Constructor');
  }

  ngOnInit(): void {
    console.log('UserListComponent OnInit method called');
    this.loadData();
  }

  loadData() {
    this.userService.fetchUsers().subscribe((response) => {
      console.log('UserListComponent start');
      this.userResponse = response;
      console.log('==================' + typeof this.userResponse);
      console.log(this.userResponse);
      this.userList= this.userResponse.users;
      console.log(this.userList)
      console.log('UserListComponent end');
    });
  }
}
