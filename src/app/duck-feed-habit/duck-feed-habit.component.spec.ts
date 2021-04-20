import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckFeedHabitComponent } from './duck-feed-habit.component';

describe('DuckFeedHabitComponent', () => {
  let component: DuckFeedHabitComponent;
  let fixture: ComponentFixture<DuckFeedHabitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuckFeedHabitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuckFeedHabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
