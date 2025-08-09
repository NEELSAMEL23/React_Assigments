import { useState, useCallback } from "react";

function useToggleItems<T>(items: T[], initialIndex: number = 0): [T, () => void] {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

  const toggleState = useCallback(() => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % items.length);
  }, [items.length]);

  return [items[currentIndex], toggleState];
}

export default useToggleItems;
