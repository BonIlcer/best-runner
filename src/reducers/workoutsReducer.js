import {
  CREATE_WORKOUT,
  DELETE_WORKOUT,
  EDIT_WORKOUT,
  WORKOUTS_LIST,
} from "../consts";

const initialState = {
  workoutsData: WORKOUTS_LIST,
};

export const workoutsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_WORKOUT:
      return { workoutsData: state.workoutsData.concat(action.workout) };
    case EDIT_WORKOUT:
      return { workoutsData: state.workoutsData };
    case DELETE_WORKOUT:
      return {
        workoutsData: state.workoutsData.filter(
          (workout) => workout.id !== action.id
        ),
      };
    default:
      return state;
  }
};
