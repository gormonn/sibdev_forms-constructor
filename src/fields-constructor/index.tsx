import * as React from "react";
import { FieldProps } from "./types";
import InputFields from "./InputFields";
import scheme from "../static/scheme.json";

function Fields({ name, fields }: FieldProps) {
  return (
    <div>
      <label>{name}</label>
      {fields.map(item => (
        // <div key={item.key}>{item.label}</div>
        <InputFields key={item.key} {...{ ...item }} />
      ))}
    </div>
  );
}

export interface SpreadingExampleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: React.ReactNode;
  formScheme: FieldProps;
}
export default function SpreadingExample({
  children,
  title = "Dr.",
  formScheme = scheme,
  ...other
}: SpreadingExampleProps) {
  return (
    <div {...other}>
      <Fields {...{ ...formScheme }} />
    </div>
  );
}
