import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Workout } from "../../models/Workout";
import { WorkoutService } from "../../services/workout.service";
@Component({
  selector: "app-workout-item",
  templateUrl: "./workout-item.component.html",
  styleUrls: ["./workout-item.component.css"]
})
export class WorkoutItemComponent implements OnInit {
  @Input() workout: Workout;
  @Output() deleteWorkout: EventEmitter<Workout> = new EventEmitter();

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {}

  // Set dymanic classes
  setClasses() {
    let classes = {
      workout: true,
      "is-complete": this.workout.completed
    };

    return classes;
  }

  // On Toggle
  //UI
  onToggle(workout) {
    workout.completed = !workout.completed;
    // update server
    this.workoutService.toggleCompleted(workout).subscribe(workout => {
      console.log(workout);
    });
  }

  onDelete(workout) {
    this.deleteWorkout.emit(workout);
  }
}
