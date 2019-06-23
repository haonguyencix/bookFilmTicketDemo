import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGHeComponent } from './item-ghe.component';

describe('ItemGHeComponent', () => {
  let component: ItemGHeComponent;
  let fixture: ComponentFixture<ItemGHeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGHeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGHeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
