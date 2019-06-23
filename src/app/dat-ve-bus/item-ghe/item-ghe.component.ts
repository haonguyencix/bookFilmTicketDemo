import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.scss']
})
export class ItemGheComponent implements OnInit {


  TrangThaiDangChon: boolean = false;
  @Input() ghe: string;
  @Output() eventGhe = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  datGhe() {
    this.TrangThaiDangChon = !this.TrangThaiDangChon;
    const objGhe = {
      TrangThaiDangChon: this.TrangThaiDangChon,
      ghe: this.ghe
    }
    this.eventGhe.emit(objGhe);
  }

}
