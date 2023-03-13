export type RadioButtonProps = {
  id: string;
  label: string;
  name: string;
  value: string;
};

export type TextInputProps = {
  className: string;
  criteria: RegExp;
  hasErrorFlag: boolean;
  id: string;
  name?: string;
  pattern: RegExp;
  placeholder: string;
}
