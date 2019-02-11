import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-add-workout",
  templateUrl: "./add-workout.component.html",
  styleUrls: ["./add-workout.component.css"]
})
export class AddWorkoutComponent implements OnInit {
  @Output() addWorkout: EventEmitter<any> = new EventEmitter();
  title: string;
  name: string;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    const workout = {
      title: this.title,
      name: this.name,
      completed: false
    };
    this.addWorkout.emit(workout);
  }
}
