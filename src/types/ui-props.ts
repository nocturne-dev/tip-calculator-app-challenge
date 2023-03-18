export type RadioButtonProps = {
  id: string;
  label: string;
  name: string;
  value: string;
};

export type TextInputProps = {
  styles: string;
  criteria: RegExp;
  hasErrorFlag: boolean;
  id: string;
  label?: string;
  name: string;
  pattern: RegExp;
  placeholder: string;
}
