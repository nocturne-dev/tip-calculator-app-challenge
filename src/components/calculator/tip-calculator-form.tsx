"use client";

import TipCalculatorResults from "./tip-calculator-results";
import type { RadioButtonProps } from "@/types/ui-props";
import RadioButton from "../ui/radio-button";
import TextInput from "../ui/text-input";
import { FormEvent, useContext } from "react";
import { CalcContext, CalcOperations } from "@/context/calc-context";
const tipPercentages: RadioButtonProps[] = [
  {
    id: "five",
    label: "5%",
    name: "TIP",
    value: "5",
  },
  {
    id: "ten",
    label: "10%",
    name: "TIP",
    value: "10",
  },

  {
    id: "fifteen",
    label: "15%",
    name: "TIP",
    value: "15",
  },
  {
    id: "twenty-five",
    label: "25%",
    name: "TIP",
    value: "25",
  },

  {
    id: "fifty",
    label: "50%",
    name: "TIP",
    value: "50",
  },
];

export default function TipCalculatorForm() {
  const { dispatchAmount } = useContext(CalcContext);

  const onFormResetHandler = (e: FormEvent) => {
    e.preventDefault();

    dispatchAmount(CalcOperations.Reset, "", "");
  };

  return (
    <form
      className="grid gap-y-[min(32px,calc(calc(32/9.33)*1vh))] rounded-t-xl bg-white px-8 pt-[min(39px,calc(calc(39/9.33)*1vh))] pb-[min(32px,calc(calc(32/9.33)*1vh))] md:grid-cols-2 md:gap-y-0 md:gap-x-12 md:rounded-xl md:py-[min(32px,calc(calc(32/10.24)*1vh))] md:pl-12 md:pr-8"
      onSubmit={onFormResetHandler}
    >
      <section className="grid gap-y-[min(39px,calc(calc(39/9.33)*1vh))] md:gap-y-[min(47px,calc(calc(47/10.24)*1vh))] md:py-[min(20px,calc(calc(20/10.24)*1vh))]">
        <p className="m-0 p-0 leading-none">
          <TextInput
            styles="mt-3 w-full rounded-lg bg-very-light-grayish-cyan bg-icon-dollar bg-left bg-no-repeat bg-origin-content py-4 px-5 text-end text-lg leading-none text-very-dark-cyan focus:outline-strong-cyan"
            criteria={/[0-9.\B\T]/}
            hasErrorFlag={true}
            id="bill"
            label="Bill"
            name="BILL"
            pattern={/^\d+\.\d\d\d$/}
            placeholder="0"
          />
        </p>

        <fieldset>
          <legend className="block text-xs leading-none text-grayish-cyan">
            Select Tip %
          </legend>
          <ul className="mt-[min(22px,calc(calc(22/9.33)*1vh))] grid grid-cols-2 gap-y-[min(16px,calc(calc(16/9.33)*1vh))] gap-x-4 md:grid-cols-3 md:gap-x-[14px]">
            {tipPercentages.map((percentage) => (
              <RadioButton key={percentage.id} {...percentage} />
            ))}

            <li>
              <TextInput
                styles="w-full rounded-lg bg-very-light-grayish-cyan py-3 px-5 text-end text-base leading-none text-very-dark-cyan focus:outline-strong-cyan md:text-center"
                criteria={/[0-9\B\T]/}
                hasErrorFlag={false}
                id="custom"
                name="TIP"
                pattern={/[\D]/}
                placeholder="Custom"
              />
            </li>
          </ul>
        </fieldset>

        <p className="m-0 p-0 leading-none">
          <TextInput
            styles="mt-3 w-full rounded-lg bg-very-light-grayish-cyan bg-icon-person bg-left bg-no-repeat bg-origin-content py-4 px-5 text-end text-lg leading-none text-very-dark-cyan focus:outline-strong-cyan"
            criteria={/[0-9\B\T]/}
            hasErrorFlag={true}
            id="people"
            label="Number of People"
            name="PEOPLE"
            pattern={/[\D]/}
            placeholder="0"
          />
        </p>
      </section>

      <section className="grid items-center gap-y-[min(36px,calc(calc(36/9.33)*1vh))] rounded-xl bg-very-dark-cyan px-6 pt-[min(46px,calc(calc(46/9.33)*1vh))] pb-[min(24px,calc(calc(24/9.33)*1vh))] md:gap-y-[min(60px,calc(calc(60/10.24)*1vh))] md:px-10 md:pt-[min(60px,calc(calc(60/10.24)*1vh))] md:pb-[min(40px,calc(calc(40/10.24)*1vh))]">
        <TipCalculatorResults />

        <button
          className="mt-[min(3px,calc(calc(3/9.33)*1vh))] rounded-md bg-strong-cyan py-4 text-sm uppercase leading-none text-very-dark-cyan hover:bg-light-grayish-cyan hover:text-very-dark-cyan focus:bg-light-grayish-cyan focus:text-very-dark-cyan focus:outline-none active:bg-strong-cyan active:text-very-dark-cyan md:mt-[min(78px,calc(calc(78/10.24)*1vh))] md:max-h-12"
          type="submit"
        >
          Reset
        </button>
      </section>
    </form>
  );
}
