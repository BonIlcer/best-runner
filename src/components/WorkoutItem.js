import React from "react";

export default function WorkoutItem({ item }) {
  return (
    <div className="workout-item">
      <h3>Workout Item</h3>
      <p>{JSON.stringify(item)}</p>
    </div>
  );
}
