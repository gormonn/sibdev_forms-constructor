import * as React from "react";
import { InputNumber } from "antd/es";
import { FieldsInterface, FieldsValidation } from "../types";

interface FieldInterface extends FieldsInterface {
  type: "number";
  validation: FieldValidation;
}

interface FieldValidation extends FieldsValidation {
  max?: number;
}

export default (props: FieldInterface) => <InputNumber {...{ ...props }} />;
