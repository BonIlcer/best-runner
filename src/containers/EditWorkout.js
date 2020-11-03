import { withFormik } from "formik";
import React from "react";
import ReactModal from "react-modal";
import { connect } from "react-redux";
import { Button, Card, CardBody, CardHeader } from "reactstrap";
import { editWorkout } from "../actions/workoutsActions";
import WorkoutForm from "../components/WorkoutForm";

const DATE = "edit-form-date";
const KILOMETRAGE = "edit-form-kilometrage";
const TYPE = "edit-form-type";
const COMMENT = "edit-form-comment";
const consts = {
  DATE: DATE,
  KILOMETRAGE: KILOMETRAGE,
  TYPE: TYPE,
  COMMENT: COMMENT,
  FORMGROUP_CLASS: "form-group-min-width",
};
const SAVE = "Сохранить";
const CANCEL = "Отменить";
const EDIT_WORKOUT = "Редактировать тренировку";

const customStyles = {
  overlay: {
    zIndex: "2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    maxHeight: "100%",
    overflow: "auto",
  },
};

ReactModal.setAppElement("#root");
ReactModal.defaultStyles.content = {};

function EditWorkout({ isOpen, setOpen, values, handleSubmit, handleChange }) {
  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <Card>
        <CardHeader tag="h2">{EDIT_WORKOUT}</CardHeader>
        <CardBody>
          <WorkoutForm
            values={values}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            consts={consts}
            Buttons={
              <>
                <Button type="submit" color="primary">
                  {SAVE}
                </Button>{" "}
                <Button onClick={() => setOpen(false)} color="danger">
                  {CANCEL}
                </Button>
              </>
            }
          />
        </CardBody>
      </Card>
    </ReactModal>
  );
}

const EditWorkoutFormik = withFormik({
  displayName: "EditWorkoutForm",
  mapPropsToValues: (props) => ({
    [DATE]: props.item.date,
    [KILOMETRAGE]: props.item.kilometrage,
    [TYPE]: props.item.type,
    [COMMENT]: props.item.comment,
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    const workout = {
      id: props.item.id,
      date: values[DATE],
      kilometrage: values[KILOMETRAGE],
      type: values[TYPE],
      comment: values[COMMENT],
    };
    props.dispatch(editWorkout(workout));
    setSubmitting = false;
    props.setOpen(false);
  },
})(EditWorkout);

export default connect()(EditWorkoutFormik);
