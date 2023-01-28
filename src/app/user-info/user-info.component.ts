import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../model/user-info.model';
import { User } from '../model/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  userInfo!: UserInfo;
  user!: User;

  constructor(private userService: UserService) {
    console.log('UserInfoComponent Constructor');
  }

  ngOnInit(): void {
    console.log('UserInfoComponent OnInit method called');
    this.showUserById(1);
    //this.showUserById(this.user.sid);
  }

  showUserById(id: number) {
    this.userService.getUserById(id).subscribe((response) => {
      console.log('UserInfoComponent start');
      this.userInfo = response;
      console.log('==================' + typeof this.userInfo);
      console.log(this.userInfo);
      this.user = this.userInfo.user;
      console.log(this.user);
      console.log('UserInfoComponent end');
    });
  }
}
