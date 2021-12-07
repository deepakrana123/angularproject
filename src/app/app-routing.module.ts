import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginUserComponent} from './user-auth/login-user/login-user.component';
import {LogintoComponent} from './login-user/loginto/loginto.component';
const routes: Routes = [
  {
    path:'about',
    component:LoginUserComponent
  },
  {
    path:'login',
    component:LogintoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
