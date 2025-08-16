import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemDisplayComponent} from './item.component';

describe('ItemDisplay', () => {
  let component: ItemDisplayComponent;
  let fixture: ComponentFixture<ItemDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDisplayComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ItemDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
