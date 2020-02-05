import * as React from "react";
import { Checkbox } from "antd/es";
import { FieldsInterface } from "../types";

interface FieldInterface extends FieldsInterface {
  type: "checkbox";
}

export default (props: FieldInterface) => <Checkbox {...{ ...props }} />;
