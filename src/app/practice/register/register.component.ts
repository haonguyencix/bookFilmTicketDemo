import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public DSND: any = [];
  constructor() { }

  ngOnInit() {
  }

  register(uN, pw) {
    const objND = {
      _userName: uN,
      _password: pw
    }
    this.DSND.push(objND);
    console.log(objND);
    console.log("Mảng:", this.DSND);
  }
}
