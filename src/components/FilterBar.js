import React from "react";
import { Button } from "reactstrap";
import { VisibilityFilters } from "../actions/filterActions";

export default function FilterBar({ setVisibilityFilter }) {
  return (
    <div
      className="filter-bar"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <Button
        onClick={() => {
          setVisibilityFilter(VisibilityFilters.SHOW_ALL);
        }}
      >
        SHOW_ALL
      </Button>
      <Button
        onClick={() => {
          setVisibilityFilter(VisibilityFilters.SHOW_RUNNING);
        }}
      >
        SHOW_RUNNING
      </Button>
      <Button
        onClick={() => {
          setVisibilityFilter(VisibilityFilters.SHOW_WALKING);
        }}
      >
        SHOW_WALKING
      </Button>
      <Button
        onClick={() => {
          setVisibilityFilter(VisibilityFilters.SHOW_SKIING);
        }}
      >
        SHOW_SKIING
      </Button>
      <Button
        onClick={() => {
          setVisibilityFilter(VisibilityFilters.SHOW_CYCLING);
        }}
      >
        SHOW_CYCLING
      </Button>
    </div>
  );
}
