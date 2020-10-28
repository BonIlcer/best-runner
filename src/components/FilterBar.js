import React, { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";
import { VisibilityFilters } from "../actions/filterActions";

const SHOW_ALL = "Все";
const SHOW_RUNNING = "Бег";
const SHOW_WALKING = "Ходьба";
const SHOW_SKIING = "Лыжи";
const SHOW_CYCLING = "Велосипед";
const LABEL_FILTER = "Фильтр:";

export default function FilterBar({ setVisibilityFilter }) {
  const [rSelected, setRSelected] = useState(1);
  return (
    <div
      className="filter-bar"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <h3 style={{ marginRight: "20px" }}>{LABEL_FILTER}</h3>
      <ButtonGroup>
        <Button
          color="primary"
          active={rSelected === 1}
          onClick={() => {
            setRSelected(1);
            setVisibilityFilter(VisibilityFilters.SHOW_ALL);
          }}
        >
          {SHOW_ALL}
        </Button>
        <Button
          color="primary"
          active={rSelected === 2}
          onClick={() => {
            setRSelected(2);
            setVisibilityFilter(VisibilityFilters.SHOW_RUNNING);
          }}
        >
          {SHOW_RUNNING}
        </Button>
        <Button
          color="primary"
          active={rSelected === 3}
          onClick={() => {
            setRSelected(3);
            setVisibilityFilter(VisibilityFilters.SHOW_WALKING);
          }}
        >
          {SHOW_WALKING}
        </Button>
        <Button
          color="primary"
          active={rSelected === 4}
          onClick={() => {
            setRSelected(4);
            setVisibilityFilter(VisibilityFilters.SHOW_SKIING);
          }}
        >
          {SHOW_SKIING}
        </Button>
        <Button
          color="primary"
          active={rSelected === 5}
          onClick={() => {
            setRSelected(5);
            setVisibilityFilter(VisibilityFilters.SHOW_CYCLING);
          }}
        >
          {SHOW_CYCLING}
        </Button>
      </ButtonGroup>
    </div>
  );
}
