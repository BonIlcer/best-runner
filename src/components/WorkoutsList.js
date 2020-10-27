import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import {
  LABEL_COMMENT,
  LABEL_DATE,
  LABEL_TYPE,
  LABEL_KILOMETRAGE,
} from "../consts";
import FilterBar from "./FilterBar";
import WorkoutItem from "./WorkoutItem";

function WorkoutsList({ workoutsList, setVisibilityFilter }) {
  const [list, setList] = useState(null);
  // true - Ascending Order, false - Descending order
  const [kmOrder, setKmOrder] = useState(true);
  const [dateOrder, setDateOrder] = useState(true);

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
  }, [workoutsList]);

  return (
    <div className="workouts-list">
      <h2>Workouts List</h2>
      <hr />
      <FilterBar setVisibilityFilter={setVisibilityFilter} />
      <hr />
      {list ? (
        <Table>
          <thead>
            <tr>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => sortBy(dateCompare)}
              >
                {LABEL_DATE}
              </th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => sortBy(kilometrageCompare)}
              >
                {LABEL_KILOMETRAGE}
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
    </div>
  );
}

export default WorkoutsList;
