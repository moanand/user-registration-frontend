import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Address } from "../model/address.model";
import { User } from "../model/user.model";
import { UserService } from "../user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  userRegistration!: FormGroup;
  user!: User;
  address!: Address;

  constructor(private router: Router, private userService: UserService) {
    this.user = new User();
    this.address = new Address();
  }

  ngOnInit(): void {
    this.userRegistration = new FormGroup({
      username: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ])
      ),
      title: new FormControl("", Validators.required),
      firstName: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ])
      ),
      lastName: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ])
      ),
      birthDate: new FormControl("", Validators.compose([Validators.required])),
      email: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.email])
      ),
      phone: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ])
      ),
      address: new FormGroup({
        addressLine: new FormControl(
          "",
          Validators.compose([Validators.required])
        ),
        country: new FormControl("", Validators.compose([Validators.required])),
        state: new FormControl("", Validators.compose([Validators.required])),
        city: new FormControl("", Validators.compose([Validators.required])),
        pinCode: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(6),
          ])
        ),
      }),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ])
      ),
      confirmPassword: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
      isTncAccepted: new FormControl(
        false,
        Validators.compose([Validators.required, Validators.requiredTrue])
      ),
    });
  }
  register() {
    console.log(this.userRegistration.value);
    this.userService.saveUser(this.userRegistration.value).subscribe(
      (response) => {
        console.log(response);
        this.user = response;
        this.cancelRegForm();
      },
      (err) => {
        console.log(err.error);
        console.log(err.headers);
        console.log(err.message);
        console.log(err.name);
        console.log(err.ok);
        console.log(err.status);
        console.log(err.statusText);
        console.log(err.url);
      }
    );
  }

  cancelRegForm() {
    this.userRegistration.reset();
    this.router.navigate(["user-list"]);
  }
}
