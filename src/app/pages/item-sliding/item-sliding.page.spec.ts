import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemSlidingPage } from './item-sliding.page';

describe('ItemSlidingPage', () => {
  let component: ItemSlidingPage;
  let fixture: ComponentFixture<ItemSlidingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSlidingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
