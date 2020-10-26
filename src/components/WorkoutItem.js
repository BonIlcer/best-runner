import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteWorkout } from "../actions/workoutsActions";

export default function WorkoutItem({ item }) {
  const [isEdit, setEditing] = useState(false);

  const dispatch = useDispatch();
  return (
    <>
      <tr>
        <td>{item.date}</td>
        <td>{item.kilometrage}</td>
        <td>{item.type}</td>
        <td>{item.comment}</td>
        <td>
          <button onClick={() => setEditing(!isEdit)}>
            {!isEdit ? "edit" : "save"}
          </button>
          <button onClick={() => dispatch(deleteWorkout(item.id))}>X</button>
        </td>
      </tr>
    </>
  );
}
