import { CREATE_WORKOUT, DELETE_WORKOUT, EDIT_WORKOUT } from "../consts";

export function createWorkout(workout) {
  return { type: CREATE_WORKOUT, workout };
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
