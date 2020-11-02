import React from "react";
import "./App.css";
import AddWorkout from "./containers/AddWorkout";
import VisibleWorkoutList from "./containers/VisibleWorkoutList";

function App() {
  return (
    <div className="App">
      <h1 className="title">Best Runner</h1>
      <AddWorkout />
      <VisibleWorkoutList />
    </div>
  );
}

export default App;
