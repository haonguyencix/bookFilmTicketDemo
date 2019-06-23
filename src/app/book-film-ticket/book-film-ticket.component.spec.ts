import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFilmTicketComponent } from './book-film-ticket.component';

describe('BookFilmTicketComponent', () => {
  let component: BookFilmTicketComponent;
  let fixture: ComponentFixture<BookFilmTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFilmTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFilmTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
