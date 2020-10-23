import React from "react";

import "./App.css";
import VisibleWorkoutList from "./containers/VisibleWorkoutList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>App</h1>
        <VisibleWorkoutList />
      </header>
    </div>
  );
}

export default App;
