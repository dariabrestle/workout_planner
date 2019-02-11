import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WorkoutsComponent } from "./components/workouts/workouts.component";
import { WorkoutItemComponent } from "./components/workout-item/workout-item.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { AddWorkoutComponent } from "./components/add-workout/add-workout.component";
import { AboutComponent } from './components/Pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutsComponent,
    WorkoutItemComponent,
    HeaderComponent,
    AddWorkoutComponent,
    AboutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
