import { withFormik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { createWorkout, newCreateWorkout } from "../actions/workoutsActions";
import { Button, Card, CardBody, CardHeader, Container } from "reactstrap";
import WorkoutForm from "../components/WorkoutForm";

const DATE = "add-form-date";
const KILOMETRAGE = "add-form-kilometrage";
const TYPE = "add-form-type";
const COMMENT = "add-form-comment";
const consts = {
  DATE: DATE,
  KILOMETRAGE: KILOMETRAGE,
  TYPE: TYPE,
  COMMENT: COMMENT,
  FORMGROUP_CLASS: "form-group-min-width",
};

const LABEL_CREATE = "Создать";
const LABEL_ADD_WORKOUT = "Добавить тренировку";

function AddWorkout({ values, handleSubmit, handleChange }) {
  return (
    <>
      <Container fluid="sm">
        <Card>
          <CardHeader tag="h2">{LABEL_ADD_WORKOUT}</CardHeader>
          <CardBody>
            <WorkoutForm
              values={values}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              consts={consts}
              Buttons={<Button color="primary">{LABEL_CREATE}</Button>}
            />
          </CardBody>
        </Card>
      </Container>
    </>
  );
}

const AddWorkoutFormik = withFormik({
  displayName: "AddWorkoutForm",
  mapPropsToValues: () => ({
    [DATE]: new Date().toISOString().substr(0, 10),
    [KILOMETRAGE]: "",
    [TYPE]: "",
    [COMMENT]: "",
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    const workout = {
      id: Date.now().toString(),
      date: values[DATE],
      kilometrage: values[KILOMETRAGE].toString(),
      type: values[TYPE],
      comment: values[COMMENT],
    };
    props.dispatch(newCreateWorkout(workout));
    setSubmitting = false;
    resetForm();
  },
})(AddWorkout);

export default connect()(AddWorkoutFormik);
