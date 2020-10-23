import { CREATE_WORKOUT } from "../consts";

const initialState = {
  workoutsData: [
    { date: "date1", type: "type1", kilometrage: "km", comment: "com" },
    { date: "date2", type: "type2", kilometrage: "km2", comment: "comment" },
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
