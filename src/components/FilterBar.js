import React from "react";
import { VisibilityFilters } from "../actions/filterActions";

export default function FilterBar({ setVisibilityFilter }) {
  return (
    <div
      className="filter-bar"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <button
        onClick={() => {
          setVisibilityFilter(VisibilityFilters.SHOW_ALL);
        }}
      >
        SHOW_ALL
      </button>
      <button
        onClick={() => {
          setVisibilityFilter(VisibilityFilters.SHOW_RUNNING);
        }}
      >
        SHOW_RUNNING
      </button>
      <button
        onClick={() => {
          setVisibilityFilter(VisibilityFilters.SHOW_WALKING);
        }}
      >
        SHOW_WALKING
      </button>
      <button
        onClick={() => {
          setVisibilityFilter(VisibilityFilters.SHOW_SKIING);
        }}
      >
        SHOW_SKIING
      </button>
      <button
        onClick={() => {
          setVisibilityFilter(VisibilityFilters.SHOW_CYCLING);
        }}
      >
        SHOW_CYCLING
      </button>
    </div>
  );
}
