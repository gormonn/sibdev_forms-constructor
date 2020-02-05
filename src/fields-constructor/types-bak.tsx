export interface FieldValidation {
  required: Boolean;
}
export interface FieldType {
  key: string;
  label: string;
  validation: { required: Boolean };
}

export interface SelectOption {
  key: string;
  value: string;
}
export interface SelectFieldType extends FieldType {
  type: "select";
  options: Array<SelectOption>;
  validation: FieldType["validation"] & {};
}

export interface NumberFieldType extends FieldType {
  type: "number";
  validation: FieldType["validation"] & {
    min?: number;
    max?: number;
  };
}
export interface PasswordFieldType extends FieldType {
  type: "password";
  validation: FieldType["validation"] & {
    pattern?: string;
    min?: number;
    max?: number;
  };
}
export interface StringFieldType extends FieldType {
  type: "string";
  validation: FieldType["validation"] & {
    min?: number;
    max?: number;
  };
}
export interface CheckboxFieldType extends FieldType {
  type: "checkbox";
}

export type FieldTypes =
  | SelectFieldType
  | NumberFieldType
  | PasswordFieldType
  | StringFieldType
  | CheckboxFieldType;

export interface FieldProps {
  name: string;
  fields: Array<any>;
}
