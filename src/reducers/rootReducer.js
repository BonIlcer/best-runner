import { combineReducers } from "redux";
import { workoutsReducer } from "./workoutsReducer";
import { filterReducer } from "./filterReducer";
export const rootReducer = combineReducers({
  rootWorkouts: workoutsReducer,
  rootFilter: filterReducer,
});
