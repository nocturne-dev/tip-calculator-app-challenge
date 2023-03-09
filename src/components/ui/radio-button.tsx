import type { RadioButtonProps } from "@/types/ui-props";

export default function RadioButton({
  id,
  label,
  name,
  value,
}: RadioButtonProps) {
  return (
    <li>
      <label
        className="block w-full rounded-lg bg-very-dark-cyan py-4 text-center text-base leading-none text-white hover:bg-light-grayish-cyan hover:text-very-dark-cyan focus:bg-strong-cyan focus:text-very-dark-cyan focus:outline-none"
        htmlFor={id}
        tabIndex={0}
      >
        <input
          className="hidden"
          id={id}
          name={name}
          type="radio"
          value={value}
          onClick={() => console.log(value)}
        />
        {label}
      </label>
    </li>
  );
}
