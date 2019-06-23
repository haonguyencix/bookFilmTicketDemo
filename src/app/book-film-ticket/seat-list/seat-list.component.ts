import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { SeatItemComponent } from '../seat-item/seat-item.component';

@Component({
  selector: 'app-seat-list',
  templateUrl: './seat-list.component.html',
  styleUrls: ['./seat-list.component.scss']
})
export class SeatListComponent implements OnInit {

  @ViewChildren(SeatItemComponent) tagListSeatItem: QueryList<SeatItemComponent>;
  public ticket: number = 0;
  public total: number = 0;

  bookedList: any = [];

  seatArray: any = [
    { SeatCode: "A1", Price: 45000, SoldStatus: false },
    { SeatCode: "A2", Price: 45000, SoldStatus: false },
    { SeatCode: "A3", Price: 45000, SoldStatus: false },
    { SeatCode: "A4", Price: 45000, SoldStatus: false },
    { SeatCode: "A5", Price: 45000, SoldStatus: false },
    { SeatCode: "A6", Price: 45000, SoldStatus: false },
    { SeatCode: "A7", Price: 45000, SoldStatus: false },
    { SeatCode: "A8", Price: 45000, SoldStatus: false },
    { SeatCode: "A9", Price: 45000, SoldStatus: false },
    { SeatCode: "B1", Price: 45000, SoldStatus: false },
    { SeatCode: "B2", Price: 45000, SoldStatus: false },
    { SeatCode: "B3", Price: 45000, SoldStatus: false },
    { SeatCode: "B4", Price: 45000, SoldStatus: false },
    { SeatCode: "B5", Price: 45000, SoldStatus: false },
    { SeatCode: "B6", Price: 45000, SoldStatus: false },
    { SeatCode: "B7", Price: 45000, SoldStatus: false },
    { SeatCode: "B8", Price: 45000, SoldStatus: false },
    { SeatCode: "B9", Price: 45000, SoldStatus: false },
    { SeatCode: "C1", Price: 45000, SoldStatus: false },
    { SeatCode: "C2", Price: 45000, SoldStatus: false },
    { SeatCode: "C3", Price: 45000, SoldStatus: false },
    { SeatCode: "C4", Price: 45000, SoldStatus: false },
    { SeatCode: "C5", Price: 45000, SoldStatus: false },
    { SeatCode: "C6", Price: 45000, SoldStatus: false },
    { SeatCode: "C7", Price: 45000, SoldStatus: false },
    { SeatCode: "C8", Price: 45000, SoldStatus: false },
    { SeatCode: "C9", Price: 45000, SoldStatus: false },
    { SeatCode: "D1", Price: 45000, SoldStatus: true },
    { SeatCode: "D2", Price: 45000, SoldStatus: true },
    { SeatCode: "D3", Price: 45000, SoldStatus: false },
    { SeatCode: "D4", Price: 45000, SoldStatus: false },
    { SeatCode: "D5", Price: 45000, SoldStatus: false },
    { SeatCode: "D6", Price: 45000, SoldStatus: false },
    { SeatCode: "D7", Price: 45000, SoldStatus: false },
    { SeatCode: "D8", Price: 45000, SoldStatus: false },
    { SeatCode: "D9", Price: 45000, SoldStatus: true },
    { SeatCode: "E1", Price: 45000, SoldStatus: false },
    { SeatCode: "E2", Price: 45000, SoldStatus: false },
    { SeatCode: "E3", Price: 45000, SoldStatus: false },
    { SeatCode: "E4", Price: 45000, SoldStatus: false },
    { SeatCode: "E5", Price: 45000, SoldStatus: false },
    { SeatCode: "E6", Price: 45000, SoldStatus: true },
    { SeatCode: "E7", Price: 45000, SoldStatus: true },
    { SeatCode: "E8", Price: 45000, SoldStatus: false },
    { SeatCode: "E9", Price: 45000, SoldStatus: false },
    { SeatCode: "F1", Price: 45000, SoldStatus: false },
    { SeatCode: "F2", Price: 45000, SoldStatus: false },
    { SeatCode: "F3", Price: 45000, SoldStatus: true },
    { SeatCode: "F4", Price: 45000, SoldStatus: true },
    { SeatCode: "F5", Price: 45000, SoldStatus: false },
    { SeatCode: "F6", Price: 45000, SoldStatus: false },
    { SeatCode: "F7", Price: 45000, SoldStatus: false },
    { SeatCode: "F8", Price: 45000, SoldStatus: false },
    { SeatCode: "F9", Price: 45000, SoldStatus: false },
  ];

  noteArray: any = [
    { BgColorNote: '#F3751F', StatusNote: "Normal"},
    { BgColorNote: '#008FBE', StatusNote: "Booking"},
    { BgColorNote: '#5AAF82', StatusNote: "Sold"}
  ];
  constructor() { }

  ngOnInit() {
  }

  tickEvent(seatObj){
    if(seatObj.BookingStatus){
      this.bookedList.push(seatObj.seat);
      this.ticket++;
      this.total += seatObj.seat.Price;
    } else {
      let index = this.bookedList.findIndex(item => {
        return item.SeatCode === seatObj.seat.SeatCode;
      });
      this.bookedList.splice(index, 1);
      this.ticket--;
      this.total -= seatObj.seat.Price;
    }
  }

  delete(index, seat){
    this.bookedList.splice(index, 1);
    this.ticket--;
    this.total -= seat.Price;
    this.tagListSeatItem.map(item => {
      if(item.seat.SeatCode === seat.SeatCode){
        item.BookingStatus = false;
      }
    })
  }

}
