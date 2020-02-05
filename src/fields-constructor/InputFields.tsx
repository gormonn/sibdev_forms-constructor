import * as React from "react";
import { Checkbox, Number, Password, Select, String } from "./fields/index";
import { FieldsInterface } from "./types";

const InputByType = props => ({
  string: () => <String {...{ ...props }} />,
  password: () => <Password {...{ ...props }} />,
  select: () => <Select {...{ ...props }} />,
  number: () => <Number {...{ ...props }} />,
  checkbox: () => <Checkbox {...{ ...props }} />
});

export default function InputField(props: FieldsInterface) {
  // let Input;
  // switch (props.type) {
  //   case "string":
  //     Input = StringInput(props)
  //   break;
  //   case "password":
  //     Input = PasswordInput(props)
  //   break;
  //   case "select":
  //     Input = SelectInput(props)
  //   break;
  //   case "number":
  //     Input = NumberInput(props)
  //   break;
  // }
  return (
    <div>
      <label>{props.label}</label>
      {InputByType(props)[props.type]()}
    </div>
  );
}
