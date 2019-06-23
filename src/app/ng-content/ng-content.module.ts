import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgContentComponent } from './ng-content.component';
import { ItemCardComponent } from './item-card/item-card.component';

@NgModule({
  declarations: [NgContentComponent, ItemCardComponent],
  exports: [NgContentComponent],
  imports: [
    CommonModule
  ]
})
export class NgContentModule { }
