import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatVePhimComponent } from './dat-ve-phim.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { ItemGHeComponent } from './item-ghe/item-ghe.component';

@NgModule({
  declarations: [DatVePhimComponent, DanhSachGheComponent, ItemGHeComponent],
  exports: [DatVePhimComponent],
  imports: [
    CommonModule
  ]
})
export class DatVePhimModule { }
