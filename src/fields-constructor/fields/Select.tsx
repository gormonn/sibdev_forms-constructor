import * as React from "react";
import { Select } from "antd/es";
import { FieldsInterface } from "../types";

interface SelectOption {
  key: string;
  value: string;
}

interface FieldInterface extends FieldsInterface {
  type: "select";
  options: Array<SelectOption>;
}

export default (props: FieldInterface) => (
  <Select defaultValue={props.options[0].value}>
    {props.options.map(({ key, value }) => (
      <Select.Option key={key} value={value}>
        {value}
      </Select.Option>
    ))}
  </Select>
);
