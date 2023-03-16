"use client";

import React, { createContext, useState } from "react";

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

type CalcContextType = {
  adjustAmount: (name: string, payload: number) => void;
  retrieveAmount: (name: string) => number;
  tipPerPerson: () => string;
  totalPerPerson: () => string;
};

export const CalcContext = createContext<CalcContextType>({
  adjustAmount: () => {},
  retrieveAmount: () => 0,
  tipPerPerson: () => "",
  totalPerPerson: () => "",
});

export const CalcContextProvider = (props: { children: React.ReactNode }) => {
  const [amounts, setAmounts] = useState(initialAmount);

  const { bill, tip, people } = amounts;

  const adjustAmount = (name: string, payload: number) => {
    const key = Object.keys(amounts).find(
      (amount) => amount === name.toLowerCase()
    );

    if (!key) {
      return amounts;
    }

    setAmounts((prev) => ({
      ...prev,
      [name.toLowerCase()]: payload > 0 ? payload : 0,
    }));
  };

  const retrieveAmount = (name: string) => {
    const key = Object.keys(amounts).find(
      (amount) => amount === name.toLowerCase()
    );

    if (!key) {
      return 0;
    }

    return amounts[key as keyof ICalc];
  };

  const tipPerPerson = () => {
    if (people <= 0) {
      return "0.00";
    }

    let newTip = tip / 100;
    newTip = newTip * bill;
    newTip = newTip / people;
    return newTip.toFixed(2);
  };

  const totalPerPerson = () => {
    if (people <= 0) {
      return "0.00";
    }

    let newTip = tip / 100;
    newTip = newTip * bill;

    let total = bill + newTip;
    total = total / people;
    return total.toFixed(2);
  };

  const context = {
    adjustAmount,
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
