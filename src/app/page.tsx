import TipCalculatorForm from "@/components/calculator/tip-calculator-form";

export default function Home() {
  return (
    <main>
      <h1 className="mt-[max(50px,11.04vh-53px)] text-center text-lg uppercase leading-[26.5px] tracking-[12px] md:mt-[163px]">
        Spli
        <br />
        tter
      </h1>

      <TipCalculatorForm />
    </main>
  );
}
