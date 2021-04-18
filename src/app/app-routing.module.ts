import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuckFeedHabitComponent } from './duck-feed-habit/duck-feed-habit.component';


const routes: Routes = [
  {path: '', redirectTo: '/duckFeed',pathMatch: 'full'},
  {path: 'duckFeed',component:DuckFeedHabitComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
