import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckFeedHabitSubmissionsComponent } from './duck-feed-habit-submissions.component';

describe('DuckFeedHabitSubmissionsComponent', () => {
  let component: DuckFeedHabitSubmissionsComponent;
  let fixture: ComponentFixture<DuckFeedHabitSubmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuckFeedHabitSubmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuckFeedHabitSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
