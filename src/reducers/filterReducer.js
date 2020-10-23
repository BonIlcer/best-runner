import { VisibilityFilters } from "../actions/filterActions";

export const filterReducer = (state = VisibilityFilters.SHOW_TYPE1, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};
