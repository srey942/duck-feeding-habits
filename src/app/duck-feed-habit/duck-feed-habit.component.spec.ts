import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckFeedHabitComponent } from './duck-feed-habit.component';

describe('DuckFeedHabitComponent', () => {
  let component: DuckFeedHabitComponent;
  let fixture: ComponentFixture<DuckFeedHabitComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuckFeedHabitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuckFeedHabitComponent);
    component = fixture.componentInstance;
    component.form
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a invalid form', () => {
    console.log("test",component.form);
    component.form.controls.foodName.setValue('');
    component.form.controls.foodTypeName.setValue('');
    expect(component.form.valid).toBeFalsy();
  });
});
