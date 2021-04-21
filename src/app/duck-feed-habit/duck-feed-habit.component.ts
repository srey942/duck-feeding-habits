import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { FormField } from "src/common/form-field";
import { DbService } from "src/services/db.service";

@Component({
  selector: "app-duck-feed-habit",
  templateUrl: "./duck-feed-habit.component.html",
  styleUrls: ["./duck-feed-habit.component.css"],
})
export class DuckFeedHabitComponent implements OnInit {
  formFields: FormField[] = [];
  form;

  constructor(
    private route: Router,
    private dbService: DbService,
    private ngxLoader: NgxUiLoaderService
  ) {}

  ngOnInit() {
    this.formCreate();
  }
  formCreate() {
    this.ngxLoader.start();
    this.form = new FormGroup({});
    this.dbService.getFormFields().subscribe((formFields) => {
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
      this.ngxLoader.stop();
    });
  }
  onSubmit() {
    this.ngxLoader.start();
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

      this.dbService.addFoodDetails(body).subscribe((data) => {
        this.ngxLoader.stop();
        if (data.success) {
          this.route.navigate(["/viewAllSubmission"]);
        } else {
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
            validators.push(Validators.pattern("[A-Za-z\\s]+"));
            break;
          case "number":
            validators.push(Validators.pattern("[0-9]+"));
            break;
        }
      });
    return validators;
  }
}
