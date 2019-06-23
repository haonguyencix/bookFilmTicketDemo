import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() uName: string;
  @Input() pass: string;
  
  name: string = "";
  statusLogin: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  login(userName, password) {
    if (userName === this.uName && password === this.pass) {
      this.statusLogin = true;
      this.name = userName;
    }

    else {
      alert("Username or Password is incorrect !")

    }
  }


}
