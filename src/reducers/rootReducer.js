import { combineReducers } from "redux";
import { workoutsReducer } from "./workoutsReducer";
import { filterReducer } from "./filterReducer";
import { reducer as formReducer } from "redux-form";
export const rootReducer = combineReducers({
  rootWorkouts: workoutsReducer,
  rootFilter: filterReducer,
  rootForm: formReducer,
});
