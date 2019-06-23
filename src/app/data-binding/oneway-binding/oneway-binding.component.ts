import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-binding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.scss']
})
export class OnewayBindingComponent implements OnInit {
  name: string = "Cybersoft";

  constructor() { }

  ngOnInit() {
  }

  eventBinding(thamso){
    this.name = thamso;
  }

  onEnter(thamso){
    this.name = thamso;
  }
}
