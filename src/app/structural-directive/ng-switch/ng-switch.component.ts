import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {
  dkSwitch: string = "red";
  ddmmyy: string = "1";
  year: number = null;
  day: number = null;
  constructor() { }

  ngOnInit() {
  }

  changeColor(value) {
    this.dkSwitch = value;
  }

  changeMth(value) {
    this.ddmmyy = value;
  }

  onEnter(display) {
    this.year = parseInt(display);
    if (display % 4 === 0) {
      this.day = 29;
    }
    else {
      this.day = 28;
    }
  }
}
