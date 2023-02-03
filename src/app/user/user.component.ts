import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../model/user.model";
import { UserService } from "../user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  userRegistration!: FormGroup<any>;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userRegistration = new FormGroup({
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
    //this.userService.saveUser(this.userRegistration.value);
    console.log("========> " + this.userRegistration);
  }

  cancelRegForm() {
    this.userRegistration.reset();
    this.router.navigate(["user-list"]);
  }
}
