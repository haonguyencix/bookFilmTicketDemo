import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.scss']
})
export class ItemGHeComponent implements OnInit {
  @Input() ghe: string;

  constructor() { }

  ngOnInit() {
  }

}
