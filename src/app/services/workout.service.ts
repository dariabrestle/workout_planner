import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Workout } from "../models/Workout";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class WorkoutService {
  workoutUrl: string = "http://localhost:3001/posts";
  constructor(private http: HttpClient) {}

  // get workouts
  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.workoutUrl);
  }

  //Toggle Completed
  toggleCompleted(workout: Workout): Observable<any> {
    const url = `${this.workoutUrl}/${workout.id}`;
    return this.http.put(url, workout, httpOptions);
  }

  // Delete from server

  deleteWorkout(workout: Workout): Observable<Workout> {
    const url = `${this.workoutUrl}/${workout.id}`;
    return this.http.delete<Workout>(url, httpOptions);
  }

  // Add workout

  addWorkout(workout: Workout): Observable<Workout> {
    return this.http.post<Workout>(this.workoutUrl, workout, httpOptions);
  }
}
