import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DuckFeedHabitComponent } from "./duck-feed-habit/duck-feed-habit.component";
import { FormFieldsService } from "../services/form-fields.service";
import { Router, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent, DuckFeedHabitComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [FormFieldsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
