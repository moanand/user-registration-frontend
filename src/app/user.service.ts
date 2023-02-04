import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private BASE_URL: string;

  constructor(private _httpClient: HttpClient) {
    this.BASE_URL = "http://localhost:8080/api/userReg";
  }

  saveUser(user: any): Observable<any> {
    return this._httpClient.post(this.BASE_URL + "/addUser", user);
  }

  fetchUsers(): Observable<any> {
    return this._httpClient.get(this.BASE_URL + "/users");
  }

  getUserById(userId: number): Observable<any> {
    return this._httpClient.get(this.BASE_URL + `/users/${userId}`);
  }
}
