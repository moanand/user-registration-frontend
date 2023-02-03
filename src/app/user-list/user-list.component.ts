import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserResponse } from "../model/user-response.model";
import { User } from "../model/user.model";
import { UserService } from "../user.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  userResponse!: UserResponse;
  userList: User[] = [];

  constructor(private userService: UserService, private router: Router) {
    console.log("UserListComponent Constructor");
  }

  ngOnInit(): void {
    console.log("UserListComponent OnInit method called");
    this.loadData();
  }

  loadData() {
    this.userService.fetchUsers().subscribe((response) => {
      console.log("UserListComponent start");
      this.userResponse = response;
      console.log("==================" + typeof this.userResponse);
      console.log(this.userResponse);
      this.userList = this.userResponse.users;
      console.log(this.userList);
      console.log("UserListComponent end");
    });
  }

  showUserRegistrationPage() {
    this.router.navigate(["add-user"]);
  }
  viewUserInfo(userId: number) {
    console.log('user id :: ' + userId)
    this.router.navigate(["user-info"], { queryParams: { userId } });
  }

  editUser(userId: number) {
    this.router.navigate(["add-user"], { queryParams: { userId } });
  }

  deleteUser(userId: number) {
    console.log("user with id " + userId + " deleted");
  }
}
