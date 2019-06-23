import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {

  @ViewChild(DanhSachPhimComponent, {static: false}) domListPhim: DanhSachPhimComponent;
  constructor() { }

  ngOnInit() {
  }

  insertPhim(ma, ten, gia, hinh) {
    const objPhim = {
      maPhim: ma,
      tenPhim: ten,
      gia: gia,
      hinhAnh: hinh
    }
    this.domListPhim.themPhim(objPhim);
  }

}
