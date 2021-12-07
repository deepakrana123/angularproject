import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularlearning';
  data ="hello code "
  num=100

  getsum(){
    alert(" at button component")
  }
}
