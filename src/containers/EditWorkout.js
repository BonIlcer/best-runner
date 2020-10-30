import { withFormik } from "formik";
import React from "react";

import ReactModal from "react-modal";
import { connect } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { editWorkout } from "../actions/workoutsActions";
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

const DATE = "edit-form-date";
const KILOMETRAGE = "edit-form-kilometrage";
const TYPE = "edit-form-type";
const COMMENT = "edit-form-comment";
const SAVE = "Сохранить";
const EDIT_WORKOUT = "Редактировать тренировку";

ReactModal.setAppElement("#root");
ReactModal.defaultStyles.overlay.zIndex = "2";

function EditWorkout({ isOpen, setOpen, values, handleSubmit, handleChange }) {
  return (
    <ReactModal isOpen={isOpen}>
      <Button close onClick={() => setOpen(false)} />
      <Container fluid="sm">
        <Card>
          <CardHeader tag="h2">{EDIT_WORKOUT}</CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <Row form>
                <Col>
                  <FormGroup className={"add-form-group-min-width"}>
                    <Label htmlFor={DATE}>{LABEL_DATE}</Label>
                    <Input
                      type="date"
                      name={DATE}
                      id={DATE}
                      value={values[DATE]}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup className={"add-form-group-min-width"}>
                    <Label htmlFor={KILOMETRAGE}>{LABEL_KILOMETRAGE}</Label>
                    <Input
                      type="number"
                      min={0}
                      name={KILOMETRAGE}
                      id={KILOMETRAGE}
                      placeholder={PLACEHOLDER_KILOMETRAGE}
                      value={values[KILOMETRAGE]}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup className={"add-form-group-min-width"}>
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
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label htmlFor={COMMENT}>{LABEL_COMMENT}</Label>
                    <Input
                      type="textarea"
                      maxLength={256}
                      name={COMMENT}
                      id={COMMENT}
                      placeholder={PLACEHOLDER_COMMENT}
                      value={values[COMMENT]}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button type="submit" color="primary">
                {SAVE}
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Container>
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
