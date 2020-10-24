import React from "react";
import { useDispatch } from "react-redux";
import { deleteWorkout } from "../actions/workoutsActions";

export default function WorkoutItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="workout-item">
      <h4>Workout Item</h4>
      <div style={{ display: "flex" }}>
        <span>{JSON.stringify(item)}</span>
        <button>edit</button>
        <button onClick={() => dispatch(deleteWorkout(item.id))}>X</button>
      </div>
    </div>
  );
}
