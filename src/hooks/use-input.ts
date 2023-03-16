"use client";

import { CalcContext } from "@/context/calculator-context";
import {
  ChangeEvent,
  KeyboardEvent,
  useContext,
  useEffect,
  useReducer,
} from "react";

type InputType = {
  value: number;
  hasError: boolean;
};

const initialInput = {
  value: -1,
  hasError: false,
};

const inputReducer = (
  state: InputType,
  action: { type: string; payload: { value: string; expression?: RegExp } }
): InputType => {
  const {
    type: actionType,
    payload: { value: payloadVal, expression: payloadExpr },
  } = action;

  switch (actionType) {
    case "BLUR":
      let blurValue = Number.parseFloat(payloadVal.trim());

      return { ...state, hasError: isNaN(blurValue) || blurValue <= 0 };

    case "CHANGE":
      if (payloadExpr && payloadExpr.test(payloadVal.trim())) {
        return { ...state };
      }

      let numValue = Number.parseFloat(payloadVal.trim());

      return { ...state, value: !isNaN(numValue) ? numValue : -1 };

    case "FOCUS":
      return { ...state, hasError: false };

    case "RESET":
      return initialInput;

    default:
      return { ...state };
  }
};

export const useInput = (criteria: RegExp, pattern: RegExp, name: string) => {
  const { adjustAmount } = useContext(CalcContext);

  const [inputState, dispatch] = useReducer(inputReducer, initialInput);

  useEffect(() => {
    adjustAmount(name, inputState.value);
  }, [inputState]);

  const onBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch({ type: "BLUR", payload: { value } });
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch({ type: "CHANGE", payload: { value, expression: pattern } });
  };

  const onFocusHandler = () => {
    dispatch({ type: "FOCUS", payload: { value: "" } });
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    if (!criteria.test(key) && key !== "ArrowLeft" && key !== "ArrowRight") {
      e.preventDefault();
    }
  };

  return {
    hasError: inputState.hasError,
    onBlurHandler,
    onChangeHandler,
    onFocusHandler,
    onKeyDownHandler,
  };
};
