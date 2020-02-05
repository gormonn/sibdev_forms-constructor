export interface FieldsValidation {
  required: Boolean;
}
export interface FieldsInterface {
  key: string;
  label: string;
  validation: FieldsValidation;
}
export interface FieldProps {
  name: string;
  fields: Array<FieldsInterface>;
}
