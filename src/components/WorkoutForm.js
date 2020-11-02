import React from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
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

export default function WorkoutForm({
  values,
  handleSubmit,
  handleChange,
  consts,
  Buttons,
}) {
  return (
    <Form onSubmit={handleSubmit}>
      <Row form>
        <Col>
          <FormGroup className={consts.FORMGROUP_CLASS}>
            <Label htmlFor={consts.DATE}>{LABEL_DATE}</Label>
            <Input
              type="date"
              name={consts.DATE}
              id={consts.DATE}
              value={values[consts.DATE]}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup className={consts.FORMGROUP_CLASS}>
            <Label htmlFor={consts.KILOMETRAGE}>{LABEL_KILOMETRAGE}</Label>
            <Input
              type="number"
              min={0}
              name={consts.KILOMETRAGE}
              id={consts.KILOMETRAGE}
              placeholder={PLACEHOLDER_KILOMETRAGE}
              value={values[consts.KILOMETRAGE]}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup className={consts.FORMGROUP_CLASS}>
            <Label htmlFor={consts.TYPE}>{LABEL_TYPE}</Label>
            <Input
              type="select"
              name={consts.TYPE}
              id={consts.TYPE}
              value={values[consts.TYPE]}
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
          <FormGroup className={consts.FORMGROUP_CLASS}>
            <Label htmlFor={consts.COMMENT}>{LABEL_COMMENT}</Label>
            <Input
              type="textarea"
              maxLength={256}
              name={consts.COMMENT}
              id={consts.COMMENT}
              placeholder={PLACEHOLDER_COMMENT}
              value={values[consts.COMMENT]}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup style={{ textAlign: "right" }}>{Buttons}</FormGroup>
    </Form>
  );
}
