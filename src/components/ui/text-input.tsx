import { TextInputProps } from "@/types/ui-props";
import { ChangeEvent, KeyboardEvent, useState } from "react";

export default function TextInput({
  className,
  hasErrorFlag,
  id,
  name,
  pattern,
  placeholder,
}: TextInputProps) {
  const [inputValue, setInputValue] = useState<number>(-1);
  const [hasError, setHasError] = useState<boolean>(false);

  const onBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const numValue = Number.parseFloat(value.trim());

    setHasError(isNaN(numValue) || numValue <= 0);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const numValue = Number.parseFloat(value.trim());

    setInputValue(!isNaN(numValue) ? numValue : -1);
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    if (!pattern.test(key)) {
      e.preventDefault();
    }
  };

  return (
    <>
      {name !== undefined && (
        <label
          className="grid grid-cols-2 text-xs leading-none text-grayish-cyan"
          htmlFor={id}
        >
          <span className="text-start">{name}</span>

          {hasError && (
            <span className="text-end text-error">{`Can't be zero`}</span>
          )}
        </label>
      )}
      <input
        className={`${className} ${
          hasError ? "outline outline-error" : "outline-none"
        }`}
        id={id}
        inputMode="numeric"
        min={0}
        onBlur={(e) => {
          if (hasErrorFlag) onBlurHandler(e);
        }}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        placeholder={placeholder}
        type="number"
        value={inputValue >= 0 ? inputValue : ""}
      />
    </>
  );
}
