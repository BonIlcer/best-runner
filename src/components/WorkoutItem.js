import React from "react";

export default function WorkoutItem({ item }) {
  return (
    <div className="workout-item" style={{ borderBottom: "1px solid white" }}>
      <h4>Workout Item</h4>
      <p>{JSON.stringify(item)}</p>
    </div>
  );
}
