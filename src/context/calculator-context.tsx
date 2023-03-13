import React, { createContext, useState } from "react";

type CalcContextType = {
  billAmount: number;
  tipPercent: number;
  peopleAmount: number;
};

export const CalcContext = createContext<CalcContextType>({
  billAmount: 0,
  tipPercent: 0,
  peopleAmount: 0,
});

export const CalcContextProvider = (props: { children: React.ReactNode }) => {
  const [billAmount, setBillAmount] = useState(-1);
  const [tipPercent, setTipPercent] = useState(-1);
  const [peopleAmount, setPeopleAmount] = useState(-1);

  const context: CalcContextType = {
    billAmount,
    tipPercent,
    peopleAmount,
  };

  return (
    <CalcContext.Provider value={context}>
      {props.children}
    </CalcContext.Provider>
  );
};
