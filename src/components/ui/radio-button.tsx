"use client"

import { CalcContext } from "@/context/calc-context";
import { CalcOperations } from "@/context/calc-context";
import type { RadioButtonProps } from "@/types/ui-props";
import { MouseEvent, useContext } from "react";

export default function RadioButton({
  id,
  label,
  name,
  value,
}: RadioButtonProps) {
  const { dispatchAmount } = useContext(CalcContext);

  const onClickHandler = (e: MouseEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    dispatchAmount(CalcOperations.Change, name, value);
  };

  return (
    <li>
      <label
        className="block w-full rounded-lg bg-very-dark-cyan py-4 text-center text-base leading-none text-white hover:bg-light-grayish-cyan hover:text-very-dark-cyan focus:bg-strong-cyan focus:text-very-dark-cyan focus:outline-none"
        htmlFor={id}
        tabIndex={0}
      >
        <input
          className="hidden"
          id={id}
          name={name}
          type="radio"
          value={value}
          onClick={onClickHandler}
        />
        {label}
      </label>
    </li>
  );
}
