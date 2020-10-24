import { SET_VISIBILITY_FILTER } from "../consts";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_RUNNING: "SHOW_RUNNING",
  SHOW_WALKING: "SHOW_WALKING",
  SHOW_SKIING: "SHOW_SKIING",
  SHOW_CYCLING: "SHOW_CYCLING",
};

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
