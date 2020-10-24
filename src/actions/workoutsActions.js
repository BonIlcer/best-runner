import { CREATE_WORKOUT, DELETE_WORKOUT } from "../consts";

export function createWorkout(workout) {
  return { type: CREATE_WORKOUT, workout };
}

export function deleteWorkout(workoutId) {
  return {
    type: DELETE_WORKOUT,
    id: workoutId,
  };
}
