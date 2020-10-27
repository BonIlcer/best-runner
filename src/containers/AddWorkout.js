import { withFormik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { createWorkout } from "../actions/workoutsActions";
import { Form, FormGroup, Input, Label } from "reactstrap";
import {
  LABEL_COMMENT,
  LABEL_DATE,
  LABEL_KILOMETRAGE,
  LABEL_TYPE,
  LABEL_TYPE_CYCLING,
  LABEL_TYPE_RUNNING,
  LABEL_TYPE_SKIING,
  LABEL_TYPE_WALKING,
  PLACEHOLDER_COMMENT,
  PLACEHOLDER_KILOMETRAGE,
  PLACEHOLDER_TYPE,
  TYPE_CYCLING,
  TYPE_RUNNING,
  TYPE_SKIING,
  TYPE_WALKING,
} from "../consts";

const DATE = "add-form-date";
const KILOMETRAGE = "add-form-kilometrage";
const TYPE = "add-form-type";
const COMMENT = "add-form-comment";

function AddWorkout({ values, handleSubmit, handleChange }) {
  return (
    <>
      <h2>Add Workout</h2>
      <div style={{}}>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor={DATE}>{LABEL_DATE}</Label>
            <Input
              type="date"
              name={DATE}
              id={DATE}
              value={values[DATE]}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor={KILOMETRAGE}>{LABEL_KILOMETRAGE}</Label>
            <Input
              type="number"
              min={0}
              name={KILOMETRAGE}
              id={KILOMETRAGE}
              placeholder={PLACEHOLDER_KILOMETRAGE}
              value={values.kilometrage}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor={TYPE}>{LABEL_TYPE}</Label>
            <Input
              type="select"
              name={TYPE}
              id={TYPE}
              value={values[TYPE]}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>
                {PLACEHOLDER_TYPE}
              </option>
              <option value={TYPE_RUNNING}>{LABEL_TYPE_RUNNING}</option>
              <option value={TYPE_WALKING}>{LABEL_TYPE_WALKING}</option>
              <option value={TYPE_SKIING}>{LABEL_TYPE_SKIING}</option>
              <option value={TYPE_CYCLING}>{LABEL_TYPE_CYCLING}</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor={COMMENT}>{LABEL_COMMENT}</Label>
            <Input
              type="textarea"
              name={COMMENT}
              id={COMMENT}
              placeholder={PLACEHOLDER_COMMENT}
              value={values.comment}
              onChange={handleChange}
            />
          </FormGroup>
          <Input type="submit" value="submit" />
        </Form>
      </div>
    </>
  );
}

const AddWorkoutFormik = withFormik({
  displayName: "AddWorkoutForm",
  mapPropsToValues: () => ({
    [DATE]: new Date().toISOString().substr(0, 10),
    [KILOMETRAGE]: undefined,
    [TYPE]: "",
    [COMMENT]: "",
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    console.log("Formik submit");
    console.log(props);
    console.log(values);
    const workout = {
      id: Date.now(),
      date: values[DATE],
      kilometrage: values[KILOMETRAGE],
      type: values[TYPE],
      comment: values[COMMENT],
    };
    props.dispatch(createWorkout(workout));
    setSubmitting = false;
  },
})(AddWorkout);

export default connect()(AddWorkoutFormik);
