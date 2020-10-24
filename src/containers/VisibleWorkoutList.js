import { connect } from "react-redux";
import {
  setVisibilityFilter,
  VisibilityFilters,
} from "../actions/filterActions";
import WorkoutsList from "../components/WorkoutsList";
import {
  TYPE_CYCLING,
  TYPE_RUNNING,
  TYPE_SKIING,
  TYPE_WALKING,
} from "../consts";

const getVisibleWorkouts = (workouts, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return workouts;
    case VisibilityFilters.SHOW_RUNNING:
      return workouts.filter((workout) => workout.type === TYPE_RUNNING);
    case VisibilityFilters.SHOW_WALKING:
      return workouts.filter((workout) => workout.type === TYPE_WALKING);
    case VisibilityFilters.SHOW_SKIING:
      return workouts.filter((workout) => workout.type === TYPE_SKIING);
    case VisibilityFilters.SHOW_CYCLING:
      return workouts.filter((workout) => workout.type === TYPE_CYCLING);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state) => {
  console.log("state: ", state);
  return {
    workoutsList: getVisibleWorkouts(
      state.rootWorkouts.workoutsData,
      state.rootFilter
    ),
  };
};

const mapDispatchToProps = {
  setVisibilityFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsList);
