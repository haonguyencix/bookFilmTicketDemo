import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-ngif',
  templateUrl: './bai-tap-ngif.component.html',
  styleUrls: ['./bai-tap-ngif.component.scss']
})
export class BaiTapNgifComponent implements OnInit {
  statusLogin: boolean = false;
  statusLogout: boolean = false;
  statusRes: boolean = true;
  name: string = "";
  pw: string = "";
  public DSND: any = [];
  constructor() { }

  ngOnInit() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    if (localStorage.getItem("userLogin") !== null) {
      this.statusLogin = true;
      // this.name = JSON.parse(localStorage.getItem("userLogin"));
    }
  }

  login(userName, password) {
    if (userName === "1" && password === "3") {
      this.statusLogin = true;
      this.name = userName;

      // localStorage.setItem("userLogin", JSON.stringify(userName));
    }
    else {
      alert("Username or Password is incorrect !")
    }
  }

  showLogout() {
    this.statusLogout = true;
  }

  hiddenRes() {
    this.statusRes = false;
  }

  logout() {
    this.statusLogin = false;
    this.statusLogout = false;
    this.statusRes = true;
  }

  res(uname, pass) {
    const objND = {
      _uname: uname,
      _pass: pass
    }
    this.DSND.push(objND);
    console.log(objND);
    console.log("Mảng:", this.DSND);
  }

}

