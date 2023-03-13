import { useInput } from "@/hooks/use-input";
import { TextInputProps } from "@/types/ui-props";
import Image from "next/image";
import { ChangeEvent, KeyboardEvent, useState } from "react";

export default function TextInput({
  className,
  criteria,
  hasErrorFlag,
  id,
  name,
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
        onFocus={onFocusHandler}
        onKeyDown={onKeyDownHandler}
        placeholder={placeholder}
        type="number"
        value={inputValue >= 0 ? inputValue : ""}
      />
    </>
  );
}
