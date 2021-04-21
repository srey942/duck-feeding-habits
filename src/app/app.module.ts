import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DuckFeedHabitComponent } from "./duck-feed-habit/duck-feed-habit.component";

import { Router, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { DuckFeedHabitSubmissionsComponent } from "./duck-feed-habit-submissions/duck-feed-habit-submissions.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { NgxUiLoaderModule, NgxUiLoaderService } from "ngx-ui-loader";
@NgModule({
  declarations: [
    AppComponent,
    DuckFeedHabitComponent,
    DuckFeedHabitSubmissionsComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxUiLoaderModule,
  ],
  providers: [NgxUiLoaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
