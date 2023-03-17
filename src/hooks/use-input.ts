"use client";

import { CalcContext, CalcOperations } from "@/context/calc-context";
import {
  ChangeEvent,
  KeyboardEvent,
  useContext,
} from "react";

export const useInput = (criteria: RegExp, pattern: RegExp, name: string) => {
  const { dispatchAmount } = useContext(CalcContext);

  const onBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatchAmount(CalcOperations.Blur, name, value);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatchAmount(CalcOperations.Change, name, value, pattern);
  };

  const onFocusHandler = () => {
    dispatchAmount(CalcOperations.Focus, name, "");
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    if (!criteria.test(key) && key !== "ArrowLeft" && key !== "ArrowRight") {
      e.preventDefault();
    }
  };

  return {
    onBlurHandler,
    onChangeHandler,
    onFocusHandler,
    onKeyDownHandler,
  };
};
