"use client";

import React, { createContext, useReducer } from "react";

interface ICalc {
  bill: number;
  tip: number;
  people: number;
}

const initialAmount: ICalc = {
  bill: 0,
  tip: 0,
  people: 0,
};

const contextReducer = (
  state: ICalc,
  action: { type: string; payload: number }
) => {
  const { type, payload } = action;

  switch (type) {
    case "BILL":
      return { ...state, bill: payload > 0 ? payload : 0 };
    case "TIP":
      return { ...state, tip: payload > 0 ? payload : 0 };
    case "PEOPLE":
      return { ...state, people: payload > 0 ? payload : 0 };
    default:
      return { ...state };
  }
};

type CalcContextType = {
  adjustAmount: (type: string, payload: number) => void,
  tipPerPerson: () => number,
  totalPerPerson: () => number;
};

export const CalcContext = createContext<CalcContextType>({
  adjustAmount: (type: string, payload: number) => {},
  tipPerPerson: () => 0,
  totalPerPerson: () => 0,
});

export const CalcContextProvider = (props: { children: React.ReactNode }) => {
  const [amountState, dispatch] = useReducer(contextReducer, initialAmount);

  const { bill, tip, people } = amountState;

  const adjustAmount = (type: string, payload: number) => {
    dispatch({ type, payload });
  };

  const tipPerPerson = () => {
    if (people <= 0) {
      return 0;
    }

    let newTip = tip / 100;
    newTip = newTip * bill;
    newTip = newTip / people;
    return newTip;
  };

  const totalPerPerson = () => {
    if (people <= 0) {
      return 0;
    }

    let newTip = tip / 100;
    newTip = newTip * bill;

    let total = bill + newTip;
    total = total / people;
    return total;
  };

  const context = {
    adjustAmount,
    tipPerPerson,
    totalPerPerson,
  };

  return (
    <CalcContext.Provider value={context}>
      {props.children}
    </CalcContext.Provider>
  );
};
