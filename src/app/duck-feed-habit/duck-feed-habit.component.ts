import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Entry } from "contentful";
import { FormFieldsService } from "src/services/form-fields.service";

import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { FormField } from "src/common/form-field";
import { DbService } from "src/services/db.service";

@Component({
  selector: "app-duck-feed-habit",
  templateUrl: "./duck-feed-habit.component.html",
  styleUrls: ["./duck-feed-habit.component.css"],
})
export class DuckFeedHabitComponent implements OnInit {
  formFields: FormField[] = [];
  form = new FormGroup({});

  constructor(
    private route: Router,
    private formservice: FormFieldsService,
    private dbService: DbService
  ) {}

  ngOnInit() {
    this.formservice.getFormFields().then((formFields) => {
      for (let a of formFields.items) {
        this.formFields.push(a.fields);
        if (a.fields.types && a.fields.types.length > 0) {
          this.formFields[this.formFields.length - 1].type = a.fields.types[0];
        }
        this.form.addControl(
          a.fields.fieldName,
          new FormControl("", this.getValidators(a.fields))
        );
      }
    });
  }
  onSubmit() {
    Object.keys(this.form.controls).forEach((key) => {
      this.form.controls[key].markAsDirty();
    });
    if (this.form.valid) {
      for (let a of this.formFields) {
        if (a.types && a.types.length > 0) {
          this.form.controls[a.fieldName].setValue(
            this.form.controls[a.fieldName].value + " " + a.type
          );
        }
      }
      let body = this.form.value;

      const TimeofFeed = body["Time of Feed"].split(":");

      const day = new Date();
      day.setHours(TimeofFeed[0]);
      day.setMinutes(TimeofFeed[1]);
      body["Time of Feed"] = day.toUTCString();

      this.form.reset();
      Object.keys(this.form.controls).forEach((key) => {
        this.form.controls[key].markAsPristine();
        this.form.controls[key].markAsUntouched();
      });

      this.dbService.addFoodDetails(body).subscribe((data) => {
        if (data.success) {
          console.log("ts response ", data);
        } else {
          console.log("ts response ", data);
        }
      });
    }
  }

  private getValidators(form: FormField) {
    let validators = [];
    form.validator &&
      form.validator.forEach((validator) => {
        switch (validator) {
          case "required":
            validators.push(Validators.required);
            break;
          case "string":
            //validators.push(Validators.pattern("[A-Za-z]+[\s][A-Za-z]+"))
            validators.push(Validators.pattern("[A-Za-z]+"));
            break;
          case "number":
            validators.push(Validators.pattern("[0-9]+"));
            break;
        }
      });
    return validators;
  }
}
