import TipCalculatorForm from "@/components/calculator/tip-calculator-form";

export default function Home() {
  return (
    <main
      className={`h-screen overflow-auto bg-light-grayish-cyan font-space-mono`}
    >
      <section
        className={`mt-[max(calc(calc(50/9.33)*1vh),calc(calc(calc(103/9.33)*1vh)-53px))] md:mt-[max(calc(calc(163/10.24)*1vh),calc(calc(calc(216/10.24)*1vh)-53px))]`}
      >
        <h1
          className={`text-center text-lg uppercase leading-5 tracking-[12px]`}
        >
          Spli
          <br />
          tter
        </h1>

        <div
          className={`mt-[max(calc(calc(41/9.33)*1vh),calc(calc(calc(830/9.33)*1vh)-789px))] md:mx-auto md:mt-[max(calc(calc(88/10.24)*1vh),calc(calc(calc(569/10.24)*1vh)-481px))] md:max-w-[920px]`}
        >
          <TipCalculatorForm />
        </div>
      </section>
    </main>
  );
}
