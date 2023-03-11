export type RadioButtonProps = {
  id: string;
  label: string;
  name: string;
  value: string;
};

export type TextInputProps = {
  className: string;
  hasErrorFlag: boolean;
  id: string;
  name?: string;
  pattern: RegExp;
  placeholder: string;
}
