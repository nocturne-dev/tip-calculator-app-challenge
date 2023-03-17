"use client";

import { CalcContext } from "@/context/calc-context";
import { useInput } from "@/hooks/use-input";
import { TextInputProps } from "@/types/ui-props";
import { useContext } from "react";

export default function TextInput({
  className,
  criteria,
  hasErrorFlag,
  id,
  label,
  name,
  pattern,
  placeholder,
}: TextInputProps) {
  const { retrieveAmount } = useContext(CalcContext);

  const { onBlurHandler, onChangeHandler, onFocusHandler, onKeyDownHandler } =
    useInput(criteria, pattern, name);

  const { value, hasError } = retrieveAmount(name);

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
        value={value >= 0 ? value : ""}
      />
    </>
  );
}
