import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.scss']
})
export class DanhSachGheComponent implements OnInit {

  seatArray: any = [
    { SeatCode: "A1", Price: 45.000, Status: false },
    { SeatCode: "A2", Price: 45.000, Status: false },
    { SeatCode: "A3", Price: 45.000, Status: false },
    { SeatCode: "A4", Price: 45.000, Status: false },
    { SeatCode: "A5", Price: 45.000, Status: false },
    { SeatCode: "A6", Price: 45.000, Status: false },
    { SeatCode: "A7", Price: 45.000, Status: false },
    { SeatCode: "A8", Price: 45.000, Status: false },
    { SeatCode: "A9", Price: 45.000, Status: false },
    { SeatCode: "B1", Price: 45.000, Status: false },
    { SeatCode: "B2", Price: 45.000, Status: false },
    { SeatCode: "B3", Price: 45.000, Status: false },
    { SeatCode: "B4", Price: 45.000, Status: false },
    { SeatCode: "B5", Price: 45.000, Status: false },
    { SeatCode: "B6", Price: 45.000, Status: false },
    { SeatCode: "B7", Price: 45.000, Status: false },
    { SeatCode: "B8", Price: 45.000, Status: false },
    { SeatCode: "B9", Price: 45.000, Status: false },
    { SeatCode: "C1", Price: 45.000, Status: false },
    { SeatCode: "C2", Price: 45.000, Status: false },
    { SeatCode: "C3", Price: 45.000, Status: false },
    { SeatCode: "C4", Price: 45.000, Status: false },
    { SeatCode: "C5", Price: 45.000, Status: false },
    { SeatCode: "C6", Price: 45.000, Status: false },
    { SeatCode: "C7", Price: 45.000, Status: false },
    { SeatCode: "C8", Price: 45.000, Status: false },
    { SeatCode: "C9", Price: 45.000, Status: false },
    { SeatCode: "D1", Price: 45.000, Status: false },
    { SeatCode: "D2", Price: 45.000, Status: true },
    { SeatCode: "D3", Price: 45.000, Status: false },
    { SeatCode: "D4", Price: 45.000, Status: false },
    { SeatCode: "D5", Price: 45.000, Status: false },
    { SeatCode: "D6", Price: 45.000, Status: false },
    { SeatCode: "D7", Price: 45.000, Status: false },
    { SeatCode: "D8", Price: 45.000, Status: true },
    { SeatCode: "D9", Price: 45.000, Status: true },
    { SeatCode: "E1", Price: 45.000, Status: false },
    { SeatCode: "E2", Price: 45.000, Status: true },
    { SeatCode: "E3", Price: 45.000, Status: false },
    { SeatCode: "E4", Price: 45.000, Status: false },
    { SeatCode: "E5", Price: 45.000, Status: false },
    { SeatCode: "E6", Price: 45.000, Status: false },
    { SeatCode: "E7", Price: 45.000, Status: false },
    { SeatCode: "E8", Price: 45.000, Status: true },
    { SeatCode: "E9", Price: 45.000, Status: true },
    { SeatCode: "F1", Price: 45.000, Status: false },
    { SeatCode: "F2", Price: 45.000, Status: true },
    { SeatCode: "F3", Price: 45.000, Status: false },
    { SeatCode: "F4", Price: 45.000, Status: false },
    { SeatCode: "F5", Price: 45.000, Status: false },
    { SeatCode: "F6", Price: 45.000, Status: false },
    { SeatCode: "F7", Price: 45.000, Status: false },
    { SeatCode: "F8", Price: 45.000, Status: true },
    { SeatCode: "F9", Price: 45.000, Status: true },
  ];
  constructor() { }

  ngOnInit() {
  }

}
