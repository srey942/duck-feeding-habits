import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DuckFeedHabitComponent } from "./duck-feed-habit/duck-feed-habit.component";
import { DuckFeedHabitSubmissionsComponent } from "./duck-feed-habit-submissions/duck-feed-habit-submissions.component";

const routes: Routes = [
  { path: "", redirectTo: "/duckFeed", pathMatch: "full" },
  { path: "duckFeed", component: DuckFeedHabitComponent },
  { path: "viewAllSubmission", component: DuckFeedHabitSubmissionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
