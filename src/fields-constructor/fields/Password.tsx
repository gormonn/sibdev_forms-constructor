import * as React from "react";
import { Input, Select, InputNumber, Checkbox } from "antd/es";
import { FieldsInterface, FieldsValidation } from "../types";

interface FieldInterface extends FieldsInterface {
  type: "password";
  validation: FieldValidation;
}

interface FieldValidation extends FieldsValidation {
  pattern?: string;
  max?: number;
}

export default (props: FieldInterface) => <Input.Password {...{ ...props }} />;
