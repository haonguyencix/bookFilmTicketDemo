import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatVeBusComponent } from './dat-ve-bus.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';

@NgModule({
  declarations: [DatVeBusComponent, DanhSachGheComponent, ItemGheComponent],
  exports: [DatVeBusComponent],
  imports: [
    CommonModule
  ]
})
export class DatVeBusModule { }
