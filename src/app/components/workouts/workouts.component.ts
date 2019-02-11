import { Component, OnInit } from "@angular/core";
import { Workout } from "../../models/Workout";
import { WorkoutService } from "../../services/workout.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-workouts",
  templateUrl: "./workouts.component.html",
  styleUrls: ["./workouts.component.css"]
})
export class WorkoutsComponent implements OnInit {
  workouts: Workout[];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.workoutService.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
    });
  }

  deleteWorkout(workout: Workout) {
    // Remove from UI
    this.workouts = this.workouts.filter(t => t.id !== workout.id);
    // Remove from server
    this.workoutService.deleteWorkout(workout).subscribe();
  }

  addWorkout(workout: Workout) {
    this.workoutService.addWorkout(workout).subscribe(workout => {
      this.workouts.push(workout);
    });
  }
}
