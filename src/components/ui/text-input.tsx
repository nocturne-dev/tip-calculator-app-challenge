import { TextInputProps } from "@/types/ui-props";
import { ChangeEvent, useState } from "react";

export default function TextInput({
  className,
  id,
  placeholder,
}: TextInputProps) {
  const [hasError, setHasError] = useState(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log("[onChange]", value);
  };

  const onBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log("[onBlur]", value);

    // setIsError(isNaN(Number.parseFloat(value.trim())));
  };

  return (
    <input
      className={`${className} ${
        hasError ? "outline outline-error" : "outline-none"
      }`}
      id={id}
      inputMode="numeric"
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
      placeholder={placeholder}
      type="text"
    />
  );
}
