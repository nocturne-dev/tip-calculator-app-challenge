import { useState, ChangeEvent, KeyboardEvent } from "react";

export const useInput = (criteria: RegExp, pattern: RegExp) => {
    const [inputValue, setInputValue] = useState<number>(-1);
    const [hasError, setHasError] = useState<boolean>(false);

    const onBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      const numValue = Number.parseFloat(value.trim());

      setHasError(isNaN(numValue) || numValue <= 0);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      if (pattern.test(value.trim())) {
        return;
      }

      const numValue = Number.parseFloat(value.trim());

      setInputValue(!isNaN(numValue) ? numValue : -1);
    };

    const onFocusHandler = () => {
      setHasError(false);
    };

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      const { key } = e;

      if (!criteria.test(key) && key !== "ArrowLeft" && key !== "ArrowRight") {
        e.preventDefault();
      }
    };

    return {
        inputValue,
        hasError,
        onBlurHandler,
        onChangeHandler,
        onFocusHandler,
        onKeyDownHandler
    }
}
