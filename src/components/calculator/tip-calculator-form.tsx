"use client";

import TipCalculatorResults from "./tip-calculator-results";
import type { RadioButtonProps } from "@/types/ui-props";
import RadioButton from "../ui/radio-button";
import { ChangeEvent, useState } from "react";

const tipPercentages: RadioButtonProps[] = [
  {
    id: "five",
    label: "5%",
    name: "tip-percentage",
    value: "0.05",
  },
  {
    id: "ten",
    label: "10%",
    name: "tip-percentage",
    value: "0.10",
  },

  {
    id: "fifteen",
    label: "15%",
    name: "tip-percentage",
    value: "0.15",
  },
  {
    id: "twenty-five",
    label: "25%",
    name: "tip-percentage",
    value: "0.25",
  },

  {
    id: "fifty",
    label: "50%",
    name: "tip-percentage",
    value: "0.50",
  },
];

export default function TipCalculatorForm() {
  const [isError, setIsError] = useState(false);

  const onBillInputHandler = (e: ChangeEvent<HTMLInputElement>) => {};

  const onBillBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    console.log(isNaN(Number.parseFloat(value.trim())));

    setIsError(isNaN(Number.parseFloat(value.trim())));
  };

  return (
    <form className="mt-[max(41px,88.961vh-789px)] grid gap-y-8 rounded-t-xl bg-white px-8 pt-[39px] pb-8 md:mx-auto md:mt-[88px] md:max-w-[920px] md:grid-cols-2 md:gap-y-0 md:gap-x-12 md:rounded-xl md:py-8 md:pl-12 md:pr-8">
      <section className="grid gap-y-[39px] md:gap-y-[47px] md:pt-5 md:pb-4">
        <p className="m-0 p-0 leading-none">
          <label
            className="block text-xs leading-none text-grayish-cyan"
            htmlFor="bill"
          >
            Bill
          </label>
          <input
            className={`mt-[11px] w-full rounded-lg bg-very-light-grayish-cyan py-[10.75px] px-[18px] text-end text-lg leading-none text-very-dark-cyan focus:outline-strong-cyan ${
              isError ? "outline outline-error" : "outline-none"
            }`}
            id="bill"
            inputMode="numeric"
            onBlur={onBillBlurHandler}
            placeholder="0"
            type="text"
          />
        </p>

        <fieldset>
          <legend className="block text-xs leading-none text-grayish-cyan">
            Select Tip %
          </legend>
          <ul className="mt-[21px] grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-y-4 md:gap-x-[14px]">
            {tipPercentages.map((percentage) => (
              <RadioButton key={percentage.id} {...percentage} />
            ))}

            <li>
              <input
                className="w-full rounded-lg bg-very-light-grayish-cyan py-3 px-[18px] text-end text-base leading-none text-very-dark-cyan focus:outline-strong-cyan md:text-center"
                id="custom"
                placeholder="Custom"
                type="text"
              />
            </li>
          </ul>
        </fieldset>

        <p className="m-0 p-0 leading-none">
          <label
            className="block text-xs leading-none text-grayish-cyan"
            htmlFor="people"
          >
            Number of People
          </label>
          <input
            className="mt-[11px] w-full rounded-lg bg-very-light-grayish-cyan py-[10.75px] px-[18px] text-end text-lg leading-none text-very-dark-cyan focus:outline-strong-cyan"
            id="people"
            placeholder="0"
            type="text"
          />
        </p>
      </section>

      <section className="grid items-center gap-y-[37.5px] rounded-xl bg-very-dark-cyan px-6 pt-[46px] pb-6 md:gap-y-[61px] md:px-10 md:pt-[60px] md:pb-8">
        <TipCalculatorResults />
        <button className="rounded-md bg-strong-cyan py-[17px] text-sm uppercase leading-none text-very-dark-cyan hover:bg-light-grayish-cyan hover:text-very-dark-cyan focus:bg-light-grayish-cyan focus:text-very-dark-cyan focus:outline-none active:bg-strong-cyan active:text-very-dark-cyan md:mt-[77px] md:max-h-12">
          Reset
        </button>
      </section>
    </form>
  );
}