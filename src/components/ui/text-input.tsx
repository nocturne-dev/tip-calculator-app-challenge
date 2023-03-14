"use client";

import { useInput } from "@/hooks/use-input";
import { TextInputProps } from "@/types/ui-props";

export default function TextInput({
  className,
  criteria,
  hasErrorFlag,
  id,
  label,
  pattern,
  placeholder,
}: TextInputProps) {
  const {
    inputValue,
    hasError,
    onBlurHandler,
    onChangeHandler,
    onFocusHandler,
    onKeyDownHandler,
  } = useInput(criteria, pattern);

  return (
    <>
      {label !== undefined && (
        <label
          className="grid grid-cols-2 text-xs leading-none text-grayish-cyan"
          htmlFor={id}
        >
          <span className="text-start">{label}</span>

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
        onFocus={onFocusHandler}
        onKeyDown={onKeyDownHandler}
        placeholder={placeholder}
        type="number"
        value={inputValue >= 0 ? inputValue : ""}
      />
    </>
  );
}
