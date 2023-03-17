"use client";

import { createContext, useReducer } from "react";

export enum CalcOperations {
  Blur = "BLUR",
  Change = "CHANGE",
  Focus = "FOCUS",
  Reset = "RESET",
}

type CalcTypes = {
  bill: { value: number; hasError: boolean };
  tip: { value: number; hasError: boolean };
  people: { value: number; hasError: boolean };
};

const initialValues: CalcTypes = {
  bill: { value: -1, hasError: false },
  tip: { value: -1, hasError: false },
  people: { value: -1, hasError: false },
};

const calcReducer = (
  state: CalcTypes,
  action: {
    type: CalcOperations;
    payload: { name: string; value: string; expression?: RegExp };
  }
) => {
  const {
    type,
    payload: { name, value, expression },
  } = action;

  const foundEntry = Object.entries(state).find(
    ([key]) => key === name.toLowerCase()
  );

  if (!foundEntry) {
    return { ...state };
  }

  const [calcKey, calcValue] = foundEntry;

  switch (type) {
    case CalcOperations.Blur:
      let blurValue = Number.parseFloat(value.trim());

      return {
        ...state,
        [calcKey]: {
          ...calcValue,
          hasError: isNaN(blurValue) || blurValue <= 0,
        },
      };

    case CalcOperations.Change:
      if (expression && expression.test(value.trim())) {
        return { ...state };
      }

      let changeValue = Number.parseFloat(value.trim());

      return {
        ...state,
        [calcKey]: {
          ...calcValue,
          value: !isNaN(changeValue) ? changeValue : -1,
        },
      };

    case CalcOperations.Focus:
      return { ...state, [calcKey]: { ...calcValue, hasError: false } };

    case CalcOperations.Reset:
      return { ...initialValues };

    default:
      return { ...state };
  }
};

type CalcContextType = {
  dispatchAmount: (
    type: CalcOperations,
    name: string,
    value: string,
    expression?: RegExp
  ) => void;
  retrieveAmount: (name: string) => { value: number; hasError: boolean };
  tipPerPerson: () => string;
  totalPerPerson: () => string;
};

export const CalcContext = createContext<CalcContextType>({
  dispatchAmount: () => {},
  retrieveAmount: () => {
    return { value: -1, hasError: false };
  },
  tipPerPerson: () => "",
  totalPerPerson: () => "",
});

export const CalcContextProvider = (props: { children: React.ReactNode }) => {
  const [calcState, dispatch] = useReducer(calcReducer, initialValues);

  const {
    bill: { value: billValue },
    tip: { value: tipValue },
    people: { value: peopleValue },
  } = calcState;

  const dispatchAmount = (
    type: CalcOperations,
    name: string,
    value: string,
    expression?: RegExp
  ) => {
    dispatch({ type, payload: { name, value, expression } });
  };

  const retrieveAmount = (name: string) => {
    const amount = Object.entries(calcState).find(
      ([key]) => key === name.toLowerCase()
    );

    if (!amount) {
      return { value: -1, hasError: false };
    }

    return { ...amount[1] };
  };

  const tipPerPerson = () => {
    if (peopleValue <= 0) {
      return "0.00";
    }

    let newTip = (tipValue >= 0 ? tipValue : 0) / 100;
    newTip *= (billValue >= 0 ? billValue : 0);
    newTip /= peopleValue;
    return newTip.toFixed(2);
  };

  const totalPerPerson = () => {
    if (peopleValue <= 0) {
      return "0.00";
    }

    let newTip = (tipValue >= 0 ? tipValue : 0) / 100;
    newTip *= (billValue >= 0 ? billValue : 0);

    let total = billValue + newTip;
    total /= peopleValue;
    return total.toFixed(2);
  };

  const context = {
    dispatchAmount,
    retrieveAmount,
    tipPerPerson,
    totalPerPerson,
  };

  return (
    <CalcContext.Provider value={context}>
      {props.children}
    </CalcContext.Provider>
  );
};
