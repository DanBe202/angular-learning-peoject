import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arrays } from './arrays';

describe('Arrays', () => {
  let component: Arrays;
  let fixture: ComponentFixture<Arrays>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arrays]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arrays);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
