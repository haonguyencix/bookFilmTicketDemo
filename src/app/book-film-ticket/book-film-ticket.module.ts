import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFilmTicketComponent } from './book-film-ticket.component';
import { SeatListComponent } from './seat-list/seat-list.component';
import { SeatItemComponent } from './seat-item/seat-item.component';

@NgModule({
  declarations: [BookFilmTicketComponent, SeatListComponent, SeatItemComponent],
  exports: [BookFilmTicketComponent],
  imports: [
    CommonModule
  ]
})
export class BookFilmTicketModule { }
