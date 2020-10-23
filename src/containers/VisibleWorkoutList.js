import { connect } from "react-redux";
import { VisibilityFilters } from "../actions/filterActions";
import WorkoutsList from "../components/WorkoutsList";

const getVisibleWorkouts = (workouts, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return workouts;
    case VisibilityFilters.SHOW_TYPE1:
      return workouts.filter((workout) => workout.type === "type1");
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

export default connect(mapStateToProps, null)(WorkoutsList);
