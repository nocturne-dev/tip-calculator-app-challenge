"use client";

import { CalcContext } from "@/context/calc-context";
import { useContext } from "react";

export default function TipCalculatorResults() {
  const { tipPerPerson, totalPerPerson } = useContext(CalcContext);

  return (
    <>
      <div className="grid grid-cols-2 items-center">
        <div className="grid items-end gap-y-[12px]">
          <p className="text-xs leading-none text-white">Tip Amount</p>
          <p className="text-[8px] leading-none text-grayish-cyan">/ person</p>
        </div>

        <p className="text-end text-2xl leading-none text-strong-cyan md:text-[35px]">
          ${tipPerPerson()}
        </p>
      </div>

      <div className="grid grid-cols-2 items-center">
        <div className="grid items-end gap-y-[12px]">
          <p className="text-xs leading-none text-white">Total</p>
          <p className="text-[8px] leading-none text-grayish-cyan">/ person</p>
        </div>

        <p className="text-end text-2xl leading-none text-strong-cyan md:text-[35px]">
          ${totalPerPerson()}
        </p>
      </div>
    </>
  );
}
