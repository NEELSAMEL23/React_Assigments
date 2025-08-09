import { useState } from "react";

function useToggleItems<T>(
  initialValue: T[],
  initialPosition: number = 0
): [T, () => void] {
  if (!Array.isArray(initialValue) || initialValue.length === 0) {
    throw new Error("initialValue must be a non-empty array");
  }

  const validInitialPosition =
    initialPosition >= 0 && initialPosition < initialValue.length
      ? initialPosition
      : 0;

  const [index, setIndex] = useState<number>(validInitialPosition);

  const toggleState = () => {
    setIndex((prevIndex: number) => (prevIndex + 1) % initialValue.length);
  };

  return [initialValue[index], toggleState];
}

export default useToggleItems;
