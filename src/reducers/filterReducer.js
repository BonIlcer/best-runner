import { VisibilityFilters } from "../actions/filterActions";
import { SET_VISIBILITY_FILTER } from "../consts";

export const filterReducer = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
