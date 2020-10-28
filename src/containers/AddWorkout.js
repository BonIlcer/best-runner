import { withFormik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { createWorkout } from "../actions/workoutsActions";
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
const CREATE = "Создать";
const ADD_WORKOUT = "Добавить тренировку";

function AddWorkout({ values, handleSubmit, handleChange }) {
  return (
    <>
      <Container fluid="sm">
        <Card>
          <CardHeader tag="h2">{ADD_WORKOUT}</CardHeader>
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
                      name={COMMENT}
                      id={COMMENT}
                      placeholder={PLACEHOLDER_COMMENT}
                      value={values[COMMENT]}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button color="primary">{CREATE}</Button>
            </Form>
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
      id: Date.now(),
      date: values[DATE],
      kilometrage: values[KILOMETRAGE],
      type: values[TYPE],
      comment: values[COMMENT],
    };
    props.dispatch(createWorkout(workout));
    setSubmitting = false;
    resetForm();
  },
})(AddWorkout);

export default connect()(AddWorkoutFormik);
