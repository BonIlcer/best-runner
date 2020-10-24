import React from "react";
import { VisibilityFilters } from "../actions/filterActions";
import FilterBar from "./FilterBar";
import WorkoutItem from "./WorkoutItem";

function WorkoutsList({ workoutsList, setVisibilityFilter }) {
  const list = workoutsList.map((item, index) => {
    return <WorkoutItem item={item} key={index} />;
  });
  return (
    <div className="workouts-list">
      <h2>Workouts List</h2>
      <hr />
      <FilterBar setVisibilityFilter={setVisibilityFilter} />
      <hr />
      {list}
    </div>
  );
}

export default WorkoutsList;
