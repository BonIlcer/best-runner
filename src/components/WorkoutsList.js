import React from "react";

function WorkoutsList({ workoutsList }) {
  const list = workoutsList.map((item, index) => {
    return <p key={index}>{JSON.stringify(item)}</p>;
  });
  return (
    <div className="workouts-list">
      <h2>Workouts List</h2>
      <hr />
      {list}
    </div>
  );
}

export default WorkoutsList;
