import TipCalculatorForm from "@/components/calculator/tip-calculator-form";

export default function Home() {
  return (
    <main className={`overflow-auto bg-light-grayish-cyan font-space-mono h-screen`}>
      <section
        className={`mt-[max(50px,11.04vh-53px)] md:mt-[max(163px,21.094vh-53px)]`}
      >
        <h1
          className={`text-center text-lg uppercase leading-5 tracking-[12px]`}
        >
          Spli
          <br />
          tter
        </h1>

        <div
          className={`mt-[max(41px,88.961vh-789px)] md:mx-auto md:mt-[max(88px,55.567vh-481px)] md:max-w-[920px]`}
        >
          <TipCalculatorForm />
        </div>
      </section>
    </main>
  );
}
