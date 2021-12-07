import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginformComponent } from './loginform/loginform.component';
import { LogintoComponent } from './loginto/loginto.component';



@NgModule({
  declarations: [
    LoginformComponent,
    LogintoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginUserModule { }
