import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Container, Table } from "reactstrap";
import {
  LABEL_COMMENT,
  LABEL_DATE,
  LABEL_TYPE,
  LABEL_KILOMETRAGE,
} from "../consts";
import FilterBar from "./FilterBar";
import WorkoutItem from "./WorkoutItem";

const WORKOUTS_LIST = "Список тренировок";

const caretDownIcon = (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    className="bi bi-caret-down-fill"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
  </svg>
);
const caretUpIcon = (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    className="bi bi-caret-up-fill"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
  </svg>
);

function WorkoutsList({ workoutsList, setVisibilityFilter }) {
  const [list, setList] = useState(null);
  // true - Ascending Order, false - Descending order
  const [kmOrder, setKmOrder] = useState(undefined);
  const [dateOrder, setDateOrder] = useState(undefined);

  function kilometrageCompare(a, b) {
    if (kmOrder) {
      setKmOrder(false);
      return a.kilometrage < b.kilometrage ? -1 : 1;
    } else {
      setKmOrder(true);
      return a.kilometrage > b.kilometrage ? -1 : 1;
    }
  }

  function dateCompare(a, b) {
    if (dateOrder) {
      setDateOrder(false);
      return a.date < b.date ? -1 : 1;
    } else {
      setDateOrder(true);
      return a.date > b.date ? -1 : 1;
    }
  }

  function sortBy(compareFunc) {
    const sortedList = [...workoutsList]
      .sort(compareFunc)
      .map((item, index) => {
        return <WorkoutItem item={item} key={index} />;
      });
    setList(sortedList);
  }

  useEffect(() => {
    setList(
      workoutsList.map((item, index) => {
        return <WorkoutItem item={item} key={index} />;
      })
    );
    setDateOrder(undefined);
    setKmOrder(undefined);
  }, [workoutsList]);

  return (
    <Container fluid="sm" style={{ marginTop: "30px" }}>
      <Card>
        <CardHeader tag="h2">{WORKOUTS_LIST}</CardHeader>
        <CardBody>
          <FilterBar setVisibilityFilter={setVisibilityFilter} />
        </CardBody>
        <CardBody>
          {list ? (
            <Table responsive hover>
              <thead>
                <tr>
                  <th
                    style={{ cursor: "pointer" }}
                    onClick={() => sortBy(dateCompare)}
                  >
                    {LABEL_DATE + " "}
                    {dateOrder === true ? caretUpIcon : ""}
                    {dateOrder === false ? caretDownIcon : ""}
                  </th>
                  <th
                    style={{ cursor: "pointer" }}
                    onClick={() => sortBy(kilometrageCompare)}
                  >
                    {LABEL_KILOMETRAGE + " "}
                    {kmOrder === true ? caretUpIcon : ""}
                    {kmOrder === false ? caretDownIcon : ""}
                  </th>
                  <th>{LABEL_TYPE}</th>
                  <th>{LABEL_COMMENT}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{list}</tbody>
            </Table>
          ) : (
            <h3>Список пуст</h3>
          )}
        </CardBody>
      </Card>
    </Container>
  );
}

export default WorkoutsList;
