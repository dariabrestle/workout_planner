import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WorkoutsComponent } from "./components/workouts/workouts.component";

import { AboutComponent } from "./components/Pages/about/about.component";

const routes: Routes = [
  { path: "", component: WorkoutsComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
