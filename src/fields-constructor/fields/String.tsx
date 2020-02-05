import * as React from "react";
import { Input } from "antd/es";
import { FieldsInterface, FieldsValidation } from "../types";

interface FieldInterface extends FieldsInterface {
  type: "string";
  validation: FieldValidation;
}

interface FieldValidation extends FieldsValidation {
  min?: number;
  max?: number;
}

export default (props: FieldInterface) => <Input {...{ ...props }} />;
