import {
  CREATE_WORKOUT,
  DELETE_WORKOUT,
  EDIT_WORKOUT,
  FETCH_WORKOUTS,
} from "../consts";

export function createWorkout(workout) {
  return { type: CREATE_WORKOUT, workout };
}

export function newCreateWorkout(workout) {
  return async (dispatch) => {
    let response = await fetch("http://localhost:3001/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(workout),
    });
    if (response.ok) {
      const json = await response.json();
      dispatch(createWorkout(json));
    } else {
      console.log("Create workout | HTTP status code: " + response.status);
    }
  };
}

export function deleteWorkout(workoutId) {
  return {
    type: DELETE_WORKOUT,
    id: workoutId,
  };
}

export function editWorkout(workout) {
  return { type: EDIT_WORKOUT, workout };
}

export function fetchWorkouts() {
  return async (dispatch) => {
    let response = await fetch("http://localhost:3001/workouts");
    if (response.ok) {
      const json = await response.json();
      dispatch({ type: FETCH_WORKOUTS, workouts: json });
    } else {
      console.log("Fetch workouts | HTTP status code: " + response.status);
    }
  };
}
