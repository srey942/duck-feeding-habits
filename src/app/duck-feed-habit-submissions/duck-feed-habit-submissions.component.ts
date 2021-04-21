import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { DbService } from "src/services/db.service";

@Component({
  selector: "app-duck-feed-habit-submissions",
  templateUrl: "./duck-feed-habit-submissions.component.html",
  styleUrls: ["./duck-feed-habit-submissions.component.css"],
})
export class DuckFeedHabitSubmissionsComponent implements OnInit {
  historyData = [];
  constructor(
    private route: Router,
    private dbService: DbService,
    private ngxLoader: NgxUiLoaderService
  ) {}

  ngOnInit() {
    this.ngxLoader.start();
    this.dbService.getFoodDetails().subscribe((data) => {
      this.historyData = data;
      this.ngxLoader.stop();
    });
  }
}
