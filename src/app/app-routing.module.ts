import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { UserInfoComponent } from "./user-info/user-info.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: "user-list", component: UserListComponent },
  { path: "user-info", component: UserInfoComponent },
  { path: "add-user", component: UserComponent },
  {
    path: "",
    redirectTo: "user-list",
    pathMatch: "full",
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
