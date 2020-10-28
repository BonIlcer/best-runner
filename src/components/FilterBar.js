import React, { useState } from "react";
import { Button, ButtonGroup, Container } from "reactstrap";
import { VisibilityFilters } from "../actions/filterActions";
import useWindowSize from "../useWindowSize";

const SHOW_ALL = "Все";
const SHOW_RUNNING = "Бег";
const SHOW_WALKING = "Ходьба";
const SHOW_SKIING = "Лыжи";
const SHOW_CYCLING = "Велосипед";
const LABEL_FILTER = "Фильтр:";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  h3: {
    paddingRight: "20px",
  },
};

export default function FilterBar({ setVisibilityFilter }) {
  const [rSelected, setRSelected] = useState(1);
  const windowSize = useWindowSize();
  return (
    <Container fluid="sm" style={styles.container}>
      <h3 style={styles.h3}>{LABEL_FILTER}</h3>
      <ButtonGroup size={windowSize.width < 375 ? "sm" : ""}>
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
    </Container>
  );
}
