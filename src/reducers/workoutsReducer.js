import {
  CREATE_WORKOUT,
  TYPE_CYCLING,
  TYPE_RUNNING,
  TYPE_SKIING,
  TYPE_WALKING,
} from "../consts";

const initialState = {
  workoutsData: [
    { date: "date1", type: TYPE_RUNNING, kilometrage: "km1", comment: "cmnt1" },
    { date: "date2", type: TYPE_RUNNING, kilometrage: "km2", comment: "cmnt2" },
    { date: "date3", type: TYPE_WALKING, kilometrage: "km3", comment: "cmnt3" },
    { date: "date4", type: TYPE_WALKING, kilometrage: "km4", comment: "cmnt4" },
    { date: "date5", type: TYPE_SKIING, kilometrage: "km5", comment: "cmnt5" },
    { date: "date6", type: TYPE_SKIING, kilometrage: "km6", comment: "cmnt6" },
    { date: "date7", type: TYPE_CYCLING, kilometrage: "km7", comment: "cmnt7" },
    { date: "date8", type: TYPE_CYCLING, kilometrage: "km8", comment: "cmnt8" },
  ],
};

export const workoutsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_WORKOUT:
      return { workoutsData: state.workoutsData.concat(action.payload) };
    default:
      return state;
  }
};
